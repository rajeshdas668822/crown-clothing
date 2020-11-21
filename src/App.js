import { Switch, Route } from 'react-router-dom';
import './App.css';
import React, { Component} from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import { auth} from './firebase/firebase-utils'

class App extends Component {
  state = { 
    currentUser: null
  }

  unSubscribeFromAuth = null;
  

  componentDidMount() { 
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount(){ 
      this.unSubscribeFromAuth();
  };  
  
  render() { 
    return ( 
       <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopePage} />
        <Route path='/signin' component={SignInAndSignOut} />        
        
      </Switch>
    </div>
     );
  }
}
 
export default App;


