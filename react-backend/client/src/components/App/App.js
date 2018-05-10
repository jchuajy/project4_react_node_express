import React, { Component } from 'react';
import MainNavbar from '../Navbar/Navbar';
import Homepage from '../Homepage/Homepage';
import Login from '../Users/Login';
import './App.css';
import { Route, Link } from "react-router-dom";

class App extends Component {

  constructor() {
    super();
    this.state = {users: []};
  };

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  };

  render() {
    return (
      <div className="App">
        <MainNavbar />
        <div className="container">
        <Route 
          path='/users/login'
          render={() => (
            <Login />
          )}
        />
        <Route
          path='/home'
          render={() => (
            <Homepage />
          )}
        />
        </div>
      </div>
    );
  }
}

export default App;
