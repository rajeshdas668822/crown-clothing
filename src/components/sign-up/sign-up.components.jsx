import React, { Component} from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument,updateUserProfileDocument} from '../../firebase/firebase-utils'

class SignUp extends Component { 
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }
    
    
    
    handleSubmit = async event => {
        event.preventDefault();       
        const { displayName, email, password, confirmPassword } = this.state;      
        if (password !== confirmPassword) { 
            alert("Password don't match");
            return;
        }
       
        try { 

            const { user } = await auth.signInWithEmailAndPassword(email, password);
            if (!user) {
                
                const { newUser } = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(newUser, { displayName });
                
            } else { 
                await updateUserProfileDocument(user, { displayName });
            }
            this.setState({
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                });

        }
        catch (error) {           
            console.error(error);
        }

    }

    handleChange = event => { 
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() { 
        const { displayName, email, password, confirmPassword } = this.state;
        return ( 
            
      <div className="sign-up">
         <h2 className="title">I Do not have an account</h2>
         <span>Sign in with your email and password</span>
         <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput type="text" name='displayName'
                    value={displayName} label="Display Name" onChange={this.handleChange} required />  
                
            <FormInput type="email" name='email'
                    value={email} label="email" onChange={this.handleChange} required />  
                
            <FormInput type="password" name='password' value={password}
                    onChange={this.handleChange} label="Password" required /> 
                
            <FormInput type="password" name='confirmPassword' value={confirmPassword}
                        onChange={this.handleChange} label="Confirm Password" required />                   
                        
                <CustomButton type="submit">Sign up</CustomButton>
            
        </form>  
    </div>
    );
    }
}
 
export default SignUp;

