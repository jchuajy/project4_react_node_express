import React, { Component } from 'react';
import Login from '../Users/Login';
import Register from '../Users/Register';
import Forgot from '../Users/Forgot';
import { Route, Link } from "react-router-dom";

class Users extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div>
            <Route 
                  path='/users/recoverpassword'
                  exact
                  render={() => (
                        <Forgot />
                  )}
            />
            <Route 
                  path='/users/register'
                  exact
                  render={() => (
                        <Register />
                  )}
            />
            <Route 
                  path='/users/login'
                  exact
                  render={() => (
                        <Login />
                  )}
            />
      </div>
    );
  }
}

export default Users;
