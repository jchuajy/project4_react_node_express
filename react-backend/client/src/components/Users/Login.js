import React, { Component } from 'react';
import './Login.css';
import './Loginjs.js'

class Login extends Component {

      constructor() {
            super();
            this.emailChangeHandler = this.emailChangeHandler.bind( this );
            this.passwordChangeHandler = this.passwordChangeHandler.bind( this );
            this.handleSubmit = this.handleSubmit.bind( this );
            this.state= {
                  formEmail: "",
                  formPassword: ""
                };
      };
    
      emailChangeHandler(event){
            this.setState({formEmail:event.target.value});
            // console.log("change", event.target.value);
      };

      passwordChangeHandler(event){
            this.setState({formPassword:event.target.value});
            // console.log("change", event.target.value);
      };

      handleSubmit(event){ 
            event.preventDefault();
            console.log("handle submit fired")
            let bodyJSON = {
                  "email": this.state.formEmail,
                  "password": this.state.formPassword
            }
            fetch('/users/login', {
                        method: 'POST',
                        headers: new Headers({'Content-Type':'application/json'}),
                        
                        body: JSON.stringify(bodyJSON)
            }).then(res => console.log(res))
            .catch(error => console.log(error));
      };

    
      render() {
        return (

            <div className="text-center">
                  <div className="logo">Welcome!</div>
                  <div className="login-form-1">
                        <form id="login-form" className="text-left" onSubmit={this.handleSubmit}>
                              <div className="login-form-main-message"></div>
                              <div className="main-login-form">
                                    <div className="login-group">
                                          <div className="form-group">
                                                <label htmlFor="lg_email" className="sr-only">Email</label>
                                                <input type="text" className="form-control" id="lg_email" name="lg_email" placeholder="email" onChange={this.emailChangeHandler} />
                                          </div>
                                          <div className="form-group">
                                                <label htmlFor="lg_password" className="sr-only">Password</label>
                                                <input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="password" onChange={this.passwordChangeHandler} />
                                          </div>
                                          <div className="form-group login-group-checkbox">
                                                <input type="checkbox" id="lg_remember" name="lg_remember" />
                                                <label htmlFor="lg_remember">remember</label>
                                          </div>
                                    </div>
                                    <button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
                              </div>
                              <div className="etc-login-form">
                                    <p>forgot your password? <a href="/users/recoverpassword">click here</a></p>
                                    <p>new user? <a href="/users/register">create new account</a></p>
                              </div>
                        </form>
                  </div>
            </div>
          
        );
      }
    }
    
    export default Login;