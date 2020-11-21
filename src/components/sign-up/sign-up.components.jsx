import React, { Component} from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignUp extends Component { 
    
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
            <div className="sign-up">
         <h2>I Do not have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name='displayName'
                value={this.state.email} label="Display Name" onChange={this.handleChange} required />  
            
          <FormInput type="email" name='email'
                value={this.state.email} label="email" onChange={this.handleChange} required />  
            
         <FormInput type="password" name='password' value={this.state.password}
                onChange={this.handleChange} label="Password" required /> 
            
        <FormInput type="password" name='confirmPassword' value={this.state.password}
                    onChange={this.handleChange} label="Confirm Password" required />                   
                    
            <CustomButton type="submit">Sign up</CustomButton>
            
        </form>  
    </div>
         );
    }
}
 
export default SignUp;

