import React, { Component } from 'react';
import './Login.css';
import './Loginjs.js'
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class Login extends Component {

      constructor() {
            super();
            this.emailChangeHandler = this.emailChangeHandler.bind( this );
            this.passwordChangeHandler = this.passwordChangeHandler.bind( this );
            this.handleSubmit = this.handleSubmit.bind( this );
            this.showLoginMessage = this.showLoginMessage.bind( this );
            this.state= {
                  formEmail: "",
                  formPassword: "",
                  currentUser: "",
                  loginMessage: ""
                };
      };

      static propTypes = {
            cookies: instanceOf(Cookies).isRequired
      };
        
      componentWillMount() {

            const { cookies } = this.props;
      }
    
      emailChangeHandler(event){
            this.setState({formEmail:event.target.value});
            // console.log("change", event.target.value);
      };

      passwordChangeHandler(event){
            this.setState({formPassword:event.target.value});
            // console.log("change", event.target.value);
      };

      showLoginMessage() {
            if (this.state.loginMessage != "") {
                  return <div className="alert alert-danger" role="alert">{this.state.loginMessage}</div>
            };
      };

      handleSubmit(event){ 
            const { cookies } = this.props;
            event.preventDefault();
            
            let bodyJSON = {
                  "email": this.state.formEmail,
                  "password": this.state.formPassword
            }
            fetch('/users/login', {
                        method: 'POST',
                        headers: new Headers({'Content-Type':'application/json'}),
                        
                        body: JSON.stringify(bodyJSON)
            }).then(res => {
                  return res.json();
            }).then(data => {
                  console.log(data)
                  if (data.loginSuccess == true) {
                        cookies.set('token', data.token, { path: '/' });
                        this.setState({loginMessage: ""});
                  } else {
                        this.setState({loginMessage: data.message});
                  }
                  
            })
            .catch(error => console.log(error));
      };

    
      render() {
            const { name } = this.state;
        return (

            <div className="text-center">
                  <div className="logo">Welcome!</div>
                  <div className="login-form-1">
                        <form id="login-form" className="text-left" onSubmit={this.handleSubmit}>
                              <div className="login-form-main-message"></div>
                              <div className="main-login-form">
                                    <div className="login-group">
                                          {this.showLoginMessage()}
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
    
    export default withCookies(Login);