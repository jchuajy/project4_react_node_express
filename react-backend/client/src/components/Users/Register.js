import React, { Component } from 'react';
import './Login.css';
import './Loginjs.js'

class Register extends Component {

      constructor() {
            super();
            this.nameChangeHandler = this.nameChangeHandler.bind( this );
            this.emailChangeHandler = this.emailChangeHandler.bind( this );
            this.passwordChangeHandler = this.passwordChangeHandler.bind( this );
            this.passwordConfirmChangeHandler = this.passwordConfirmChangeHandler.bind( this );
            this.handleSubmit = this.handleSubmit.bind( this );
            this.state= {
                  formName: "",
                  formEmail: "",
                  formPassword: "",
                  formPasswordConfirm: ""
                };
      };
      
      handleSubmit(event){ 
            event.preventDefault();
            console.log("handle submit fired")
            let bodyJSON = {
                  "name": this.state.formName,
                  "email": this.state.formEmail,
                  "password": this.state.formPassword
            }
            fetch('/users/new', {
                        method: 'POST',
                        headers: new Headers({'Content-Type':'application/json'}),
                        
                        body: JSON.stringify(bodyJSON)
            }).then(res => console.log(res))
            .catch(error => console.log(error));
      };

      nameChangeHandler(event){
            this.setState({formName:event.target.value});
            // console.log("change", event.target.value);
      }

      emailChangeHandler(event){
            this.setState({formEmail:event.target.value});
            // console.log("change", event.target.value);
      }

      passwordChangeHandler(event){
            this.setState({formPassword:event.target.value});
            // console.log("change", event.target.value);
      }

      passwordConfirmChangeHandler(event){
            this.setState({formPasswordConfirm:event.target.value});
            // console.log("change", event.target.value);
      }
      
    
    
      render() {
        return (

            <div className="text-center">
            <div className="logo">Register</div>
            <div className="login-form-1">
                  <form id="register-form" className="text-left" onSubmit={this.handleSubmit}>
                        <div className="login-form-main-message"></div>
                        <div className="main-login-form">
                              <div className="login-group">
                                    <div className="form-group">
                                          <label htmlFor="reg_fullname" className="sr-only">Full Name</label>
                                          <input type="text" className="form-control" id="reg_fullname" name="reg_fullname" placeholder="full name" onChange={this.nameChangeHandler} />
                                    </div>      
                                    <div className="form-group">
                                          <label htmlFor="reg_email" className="sr-only">Email</label>
                                          <input type="text" className="form-control" id="reg_email" name="reg_email" placeholder="email" onChange={this.emailChangeHandler} />
                                    </div>    
                                    <div className="form-group">
                                          <label htmlFor="reg_password" className="sr-only">Password</label>
                                          <input type="password" className="form-control" id="reg_password" name="reg_password" placeholder="password"  onChange={this.passwordChangeHandler}/>
                                    </div>
                                    <div className="form-group">
                                          <label htmlFor="reg_password_confirm" className="sr-only">Password Confirm</label>
                                          <input type="password" className="form-control" id="reg_password_confirm" name="reg_password_confirm" placeholder="confirm password" onChange={this.passwordConfirmChangeHandler} />
                                    </div>
                                    <div className="form-group login-group-checkbox">
                                          <input type="checkbox" className="" id="reg_agree" name="reg_agree" />
                                          <label htmlFor="reg_agree">I agree to the <a href="#">terms</a></label>
                                    </div>
                              </div>
                              <button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
                        </div>
                        <div className="etc-login-form">
                              <p>already have an account? <a href="/users/login">login here</a></p>
                        </div>
                  </form>
            </div>
      </div>
          
        );
      }
    }
    
    export default Register;