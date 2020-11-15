import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';



function App() {
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

export default App;
