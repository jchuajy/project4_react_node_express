import React, { Component } from 'react';
import MainNavbar from '../Navbar/Navbar';
import Homepage from '../Homepage/Homepage';
import Users from '../Users/Users';
import './App.css';
import { Route, Link } from "react-router-dom";

class App extends Component {

  constructor() {
    super();
    this.state = {users: []};
    // this.showUsers = this.showUsers.bind( this );
  };

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => {  
  //                       let returnArray = [];
  //                       for (let i = 0; i < users.length; i++) {
  //                         returnArray.push(users[i]["username"])
  //                       }
  //                       this.setState({users: returnArray})
  //                     });
                      
  // };

  render() {
    // const mapped = this.state.users.map(item => {
    
    //   return <li>{item}</li>
    // })
    return (
      <div className="App">
          {/* <ul>
            {mapped}
          </ul> */}
        <MainNavbar />
        <div className="container">
        <Route 
          path='/users/'
          render={() => (
            <Users />
          )}
        />
        <Route
          path='/'
          exact
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
