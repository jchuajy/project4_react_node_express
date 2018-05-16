import React, { Component } from 'react';
import './Homepage.css';

class Homepage extends Component {

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
            <div className="jumbotron">
                        <h1 className="display-4">Re-think Delivery.</h1>
                        <p className="lead">Your best and fastest way to send items overseas</p>
                        <hr className="my-4" />
                        <p>Now serving Singapore and Thailand</p>
                        <p className="lead">
                              <a className="btn btn-primary btn-lg" href="/deliveries/new" role="button">Deliver Now</a>
                        </p>
            </div>
          
        );
      }
    }
    
    export default Homepage;