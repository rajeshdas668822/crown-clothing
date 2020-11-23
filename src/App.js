import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action'

import './App.css';
import React, { Component} from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import { auth,createUserProfileDocument } from './firebase/firebase-utils'

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
        <Route path='/signin' component={SignInAndSignOut} />        
        
      </Switch>
    </div>
     );
  }
}

const mapDispatchToPros = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToPros)(App);


