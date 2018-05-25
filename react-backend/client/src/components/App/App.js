import React, { Component } from 'react';
import MainNavbar from '../Navbar/Navbar';
import Homepage from '../Homepage/Homepage';
import Users from '../Users/Users';
import NewDelivery from '../Deliveries/NewDelivery';
import AllDeliveries from '../Deliveries/AllDeliveries';
import UnassignedDeliveries from '../Deliveries/UnassignedDeliveries';
import NewSchedule from '../Schedules/NewSchedule';

import './App.css';
import { Route, Link } from "react-router-dom";


class App extends Component {

  constructor() {
    super();
    this.state = {
                  currentUser: "",
                  loginStatus: "",
                  showModal: false
                  };
    // this.showUsers = this.showUsers.bind( this );
  };

  // sets state of current user
  setUser(user) {

    this.setState({currentUser: user});
  };

  setLoginStatus(status) {

    this.setState({loginStatus: status});
  };

  showModal() {
    if (this.state.showModal === true) {
      return(
        // modal
         <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered" role="document">
           <div className="modal-content">
                 <div className="modal-header">
                   <h5 className="modal-title" id="exampleModalLabel">Our price is...</h5>
                   <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
                   </div>
                   <div className="modal-body" id="modalContents">
                   </div>
                   <div className="modal-footer">
                   <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                   <button type="button" className="btn btn-primary">Save changes</button>
                 </div>
           </div>
         </div>
       </div>
      )

    } else {
      
      return
    }
    
  }



  render() {

    return (
      <div className="App">

     
          {/* <ul>
            {mapped}
          </ul> */}
        <MainNavbar />
        <div>
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
        <Route
          path='/deliveries/new'
          exact
          render={() => (
            <NewDelivery />
          )}
        />
        <Route
          path='/deliveries/unassigned'
          exact
          render={() => (
            <UnassignedDeliveries />
          )}
        />
        <Route
          path='/deliveries'
          exact
          render={() => (
            <AllDeliveries />
          )}
        />
        <Route
          path='/schedules'
          exact
          render={() => (
            <NewSchedule />
          )}
        />
        </div>
      </div>
    );
  }
}

export default App;

