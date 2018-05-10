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
            <div class="jumbotron">
                        <h1 class="display-4">Re-think Delivery.</h1>
                        <p class="lead">Your best and fastest way to send items overseas</p>
                        <hr class="my-4" />
                        <p>Now serving Singapore and Thailand</p>
                        <p class="lead">
                              <a class="btn btn-primary btn-lg" href="#" role="button">Deliver Now</a>
                        </p>
            </div>
          
        );
      }
    }
    
    export default Homepage;