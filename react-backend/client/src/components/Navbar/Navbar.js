import React, { Component } from 'react';
import './Navbar.css';

class MainNavbar extends Component {

      constructor() {
        super();
        this.state = {users: []};
      };

      render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <a className="navbar-brand" href="/"><img src="/logo2.png" className="brandLogo"/></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                    <a className="nav-link" href="/deliveries/new">New Delivery</a>
                              </li>
                              <li className="nav-item active">
                                    <a className="nav-link" href="/users/login">Login</a>
                              </li>
                        </ul>
                        <span className="navbar-text">
                              Re-think Delivery.
                        </span>
                  </div>
            </nav>
          
        );
      }
    }
    
    export default MainNavbar;
 