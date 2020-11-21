import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.components'
import './sign-in-and-sign-out.styles.scss'
 
const SignInAndSignOut = () => (
    <div className="sing-in-and-sign-out">
        <div><SignIn /></div>
        <div><SignUp/></div>        
    </div>
    
)

export default SignInAndSignOut;