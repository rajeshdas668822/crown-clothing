import { Switch, Route ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action'

import './App.css';
import React, { Component} from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shop.component';
import CheckOutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component'
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import { auth, createUserProfileDocument } from './firebase/firebase-utils'

class App extends Component {
 

  unSubscribeFromAuth = null;
  

  componentDidMount() { 
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) { 
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
         setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });         
        });
      }
      setCurrentUser(userAuth);
    });
    
  }

  componentWillUnmount(){ 
      this.unSubscribeFromAuth();
  };  
  
  render() { 
    return ( 
       <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
         <Route path='/shop' component={ShopePage} />
         <Route exact path='/checkout' component={CheckOutPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />): (<SignInAndSignOut/>)  } />        
        
      </Switch>
    </div>
     );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToPros = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToPros)(App);


