import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUser from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

export default (WrappedComponent) => {
  class requireAuth extends Component {
    componentWillUpdate(nextProps){
      if (!nextProps.data.loading && !nextProps.data.currentUser) {
        hashHistory.push('/login');
      }
    }
    render(){
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(currentUser)(requireAuth);
};