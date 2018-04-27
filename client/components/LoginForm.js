import React, { Component } from 'react';
import AuthForm from './AuthForm';


class LoginForm extends Component{
    render(){
        return(
            <div>
                <h3>Log In</h3>
                <AuthForm />
            </div>
            );
    }
}

export default LoginForm;