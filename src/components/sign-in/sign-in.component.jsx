import React, { Component} from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { SignInWithGoogle} from '../../firebase/firebase-utils'

class SignIn extends Component {
    state = { 
        email: "",
        password: ""
    }
    
    handleSubmit = event => { 
        event.prventDefault();
        this.setState({ email: '', password: '' });

    }

    handleChange = event => { 
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() { 
        return ( 
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name='email'
                        value={this.state.email} label="email" onChange={this.handleChange} required />   
                    
                    <FormInput type="password" name='password' value={this.state.password}
                        onChange={this.handleChange} label="Password" required />   
                    
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                    
                </form>                

            </div>
         );
    }
}
 
export default SignIn;
