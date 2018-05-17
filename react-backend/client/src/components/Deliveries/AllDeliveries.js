import React, { Component } from 'react';
// import './Login.css';
// import './Loginjs.js'
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class Login extends Component {

      constructor() {
            super();
            // this.componentDidMount = this.componentDidMount.bind( this );
            // this.passwordChangeHandler = this.passwordChangeHandler.bind( this );
            // this.handleSubmit = this.handleSubmit.bind( this );
            // this.showLoginMessage = this.showLoginMessage.bind( this );
            this.state= {
                  allDeliveries: []
                };
      };

      static propTypes = {
            cookies: instanceOf(Cookies).isRequired
      };
        
      componentWillMount() {

            const { cookies } = this.props;

      };

      componentDidMount() {
            fetch('/deliveries')
            .then(
            response => {
                  if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' + response.status);
                        return;
                  }



                  // Examine the text in the response
                  response.json().then(data => {
                        this.setState({allDeliveries: data});
                  });
            }
            )
            .catch(function(err) {
                  console.log('Fetch Error', err);
            });

      }
    
      // emailChangeHandler(event){
      //       this.setState({formEmail:event.target.value});
      //       // console.log("change", event.target.value);
      // };

      // passwordChangeHandler(event){
      //       this.setState({formPassword:event.target.value});
      //       // console.log("change", event.target.value);
      // };

      // showLoginMessage() {
      //       if (this.state.loginMessage != "") {
      //             return <div className="alert alert-danger" role="alert">{this.state.loginMessage}</div>
      //       };
      // };

      // handleSubmit(event){ 
      //       const { cookies } = this.props;
      //       event.preventDefault();
      //       console.log("handle submit fired")
      //       let bodyJSON = {
      //             "email": this.state.formEmail,
      //             "password": this.state.formPassword
      //       }
      //       fetch('/users/login', {
      //                   method: 'POST',
      //                   headers: new Headers({'Content-Type':'application/json'}),
                        
      //                   body: JSON.stringify(bodyJSON)
      //       }).then(res => {
      //             return res.json();
      //       }).then(data => {
      //             console.log(data)
      //             if (data.loginSuccess == true) {
      //                   cookies.set('token', data.token, { path: '/' });
      //                   this.setState({loginMessage: ""});
      //             } else {
      //                   this.setState({loginMessage: data.message});
      //             }
                  
      //       })
      //       .catch(error => console.log(error));
      // };

    
      render() {
            // const { name } = this.state;
            let counter = 0;
            let deliveryListItems = this.state.allDeliveries.map(item => {
                  counter = counter + 1;
                  return (
                        <tr>
                              <th scope="row">{counter}</th>
                              <td>{item.delivery_number}</td>
                              <td>{item.pickup_time}</td>
                              <td>{item.delivery_time}</td>
                              <td>{item.assigned_courier}</td>
                              <td>{item.status}</td>
                        </tr>

                  )
            })
        return (

            <div>
                  <h1>All Deliveries</h1>

                  <table className="table table-sm table-light table-bordered table-hover table-striped">
                        <thead className="thead-dark">
                        <tr>
                              <th scope="col">#</th>
                              <th scope="col">Delivery No.</th>
                              <th scope="col">Pickup Time</th>
                              <th scope="col">Delivery Time</th>
                              <th scope="col">Assigned Courier</th>
                              <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {deliveryListItems}
                        </tbody>
                  </table>


            </div>
          
        );
      }
    }
    
    export default withCookies(Login);