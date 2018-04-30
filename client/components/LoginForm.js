import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = { errors: [] }
    }
    //define callback and pass it down into the Authform and will be 
    //called when AuthForm is submitted
    onSubmit({ email, password }){
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message)
            this.setState({ errors })
        })
    }
    render(){
        return(
            <div>
                <h3>Log In</h3>
                <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)}/>
            </div>
            );
    }
}

export default graphql(query)(
    graphql(mutation)(LoginForm)
    );