import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';

class LoginForm extends Component{
    //define callback and pass it down into the Authform and will be 
    //called when AuthForm is submitted
    onSubmit({ email, password }){
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(res => { debugger });
    }
    render(){
        return(
            <div>
                <h3>Log In</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)}/>
            </div>
            );
    }
}

export default graphql(mutation)(LoginForm);