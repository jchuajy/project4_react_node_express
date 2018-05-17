import React, { Component } from 'react';
import './NewDelivery.css';
import './NewDeliveryjs.js';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class NewDelivery extends Component {

      constructor() {
            super();
            this.fromNameChangeHandler = this.fromNameChangeHandler.bind( this );
            this.fromEmailChangeHandler = this.fromEmailChangeHandler.bind( this );
            this.fromPasswordChangeHandler = this.fromPasswordChangeHandler.bind( this );
            this.fromContactChangeHandler = this.fromContactChangeHandler.bind( this );
            this.pickUpAddressChangeHandler = this.pickUpAddressChangeHandler.bind( this );
            this.pickUpCountryChangeHandler = this.pickUpCountryChangeHandler.bind( this );
            this.pickUpZipChangeHandler = this.pickUpZipChangeHandler.bind( this );
            this.pickUpTimeChangeHandler = this.pickUpTimeChangeHandler.bind( this );

            this.toNameChangeHandler = this.toNameChangeHandler.bind( this );
            this.toEmailChangeHandler = this.toEmailChangeHandler.bind( this );
            this.toPasswordChangeHandler = this.toPasswordChangeHandler.bind( this );
            this.toContactChangeHandler = this.toContactChangeHandler.bind( this );
            this.deliveryAddressChangeHandler = this.deliveryAddressChangeHandler.bind( this );
            this.deliveryCountryChangeHandler = this.deliveryCountryChangeHandler.bind( this );
            this.deliveryZipChangeHandler = this.deliveryZipChangeHandler.bind( this );
            this.deliveryTimeChangeHandler = this.deliveryTimeChangeHandler.bind( this );

            this.handleSubmit = this.handleSubmit.bind( this );

            this.state = {
                  fromName: "",
                  fromEmail: "",
                  fromPassword: "",
                  fromContact: "",
                  pickUpAddress: "",
                  pickUpCountry: "",
                  pickUpZip: "",
                  pickUpTime: "",
                  toName: "",
                  toEmail: "",
                  toPassword: "",
                  toContact: "",
                  deliveryAddress: "",
                  deliveryCountry: "",
                  deliveryZip: "",
                  deliveryTime: ""
            }
      };


      // fromChangeHandler(event) {
            
      //       this.setState({fromAddress:event.target.value});
      //       const { google, map } = this.props;
      //       const options = {
      //             types: ['address'],
      //             componentRestrictions: {'country': ['sg', 'th']}
      //       }
      //       this.fromAutoComplete = new google.maps.places.Autocomplete(document.getElementById('fromAddress'), options);
      //       this.fromAutoComplete.addListener('place_changed', this.getFromAddress);

      // };

      fromNameChangeHandler(event){
            this.setState({fromName: event.target.value});
            // console.log("change", event.target.value);
      };

      fromEmailChangeHandler(event){
            this.setState({fromEmail: event.target.value});
            // console.log("change", event.target.value);
      };

      fromPasswordChangeHandler(event){
            this.setState({fromPassword: event.target.value});
            // console.log("change", event.target.value);
      };

      fromContactChangeHandler(event){
            this.setState({fromContact: event.target.value});
            // console.log("change", event.target.value);
      };

      pickUpAddressChangeHandler(event){
            this.setState({pickUpAddress: event.target.value});
            // console.log("change", event.target.value);
      };

      pickUpCountryChangeHandler(event){

            this.setState({pickUpCountry: event.target.value});
            // console.log("change", event.target.value);
      };

      pickUpZipChangeHandler(event){

            this.setState({pickUpZip: event.target.value});
            // console.log("change", event.target.value);
      };

      pickUpTimeChangeHandler(event){

            this.setState({pickUpTime: event.target.value});
            // console.log("change", event.target.value);
      };

      toNameChangeHandler(event){
            this.setState({toName: event.target.value});
            // console.log("change", event.target.value);
      };

      toEmailChangeHandler(event){
            this.setState({toEmail: event.target.value});
            // console.log("change", event.target.value);
      };

      toPasswordChangeHandler(event){
            this.setState({toPassword: event.target.value});
            // console.log("change", event.target.value);
      };

      toContactChangeHandler(event){
            this.setState({toContact: event.target.value});
            // console.log("change", event.target.value);
      };

      deliveryAddressChangeHandler(event){
            this.setState({deliveryAddress: event.target.value});
            // console.log("change", event.target.value);
      };

      deliveryCountryChangeHandler(event){

            this.setState({deliveryCountry: event.target.value});
            // console.log("change", event.target.value);
      };

      deliveryZipChangeHandler(event){

            this.setState({deliveryZip: event.target.value});
            // console.log("change", event.target.value);
      };

      deliveryTimeChangeHandler(event){

            this.setState({deliveryTime: event.target.value});
            // console.log("change", event.target.value);
      };

      handleSubmit(event){ 

            event.preventDefault();

            let bodyJSON = {
                  "fromName": this.state.fromName,
                  "fromEmail": this.state.fromEmail,
                  "fromPassword": this.state.fromPassword,
                  "fromContact": this.state.fromContact,
                  "pickUpAddress": this.state.pickUpAddress,
                  "pickUpCountry": this.state.pickUpCountry,
                  "pickUpZip": this.state.pickUpZip,
                  "pickUpTime": this.state.pickUpTime,
                  "toName": this.state.toName,
                  "toEmail": this.state.toEmail,
                  "toPassword": this.state.toPassword,
                  "toContact": this.state.toContact,
                  "deliveryAddress": this.state.deliveryAddress,
                  "deliveryCountry": this.state.deliveryCountry,
                  "deliveryZip": this.state.deliveryZip,
                  "deliveryTime": this.state.deliveryTime
            };

            fetch('/deliveries/new', {
                        method: 'POST',
                        headers: new Headers({'Content-Type':'application/json'}),
                        
                        body: JSON.stringify(bodyJSON)
            // }).then(res => {
            //       return res.json();
            // }).then(data => {
            //       console.log(data)
            //       // if (data.loginSuccess == true) {
            //       //       cookies.set('token', data.token, { path: '/' });
            //       //       this.setState({loginMessage: ""});
            //       // } else {
            //       //       this.setState({loginMessage: data.message});
            //       // }
                  
            })
            .catch(error => console.log(error));
      };



    
      render() {
            // const { position } = this.state;
        return (
      
            <div className="container">

                  {/* welcome header */}
                  <div className="py-5 text-center">
                        <img className="newDeliveryLogo" src="/blackLogo.png" alt="" width="72" height="72" />
                        <h2>Checkout form</h2>
                  </div>


                  {/* start actual form */}
                  <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Sender Information</h4>
                        <form className="needs-validation" noValidate>
                              <div className="row">
                                    <div className="col-md-6 mb-3">
                                          <label htmlFor="Name">Name</label>
                                          <input type="text" className="form-control" id="firstName" placeholder="John Doe" onBlur={this.fromNameChangeHandler} />
                                          <div className="invalid-feedback">
                                          Valid first name is required.
                                          </div>
                                    </div>
                              </div>

                              <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" onBlur={this.fromEmailChangeHandler} />
                                    <div className="invalid-feedback">
                                    Please enter a valid email address.
                                    </div>
                              </div>

                              <div className="mb-3">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="form-control" id="email" placeholder="mysecretpassword" onBlur={this.fromPasswordChangeHandler} />
                                    <div className="invalid-feedback">
                                    Please enter a valid password.
                                    </div>
                              </div>

                              <div className="mb-3">
                                    <label htmlFor="">Contact</label>
                                    <input type="text" className="form-control" id="email" placeholder="91234567" onBlur={this.fromContactChangeHandler} />
                                    <div className="invalid-feedback">
                                    Please enter a valid contact.
                                    </div>
                              </div>

                              <br />
                              <hr className="mb-4" />

                              <h4>Pick-Up Information</h4>
                              <br />
                              <div className="mb-3">
                                    <label htmlFor="address">Pick-up Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" onBlur={this.pickUpAddressChangeHandler} required />
                                    <div className="invalid-feedback">
                                    Please enter your pick-up address.
                                    </div>
                              </div>

                              <div className="row">
                                    <div className="col-md-5 mb-3">
                                          <label htmlFor="country">Country</label>
                                          <select className="custom-select d-block w-100" id="pickUpCountry" onChange={this.pickUpCountryChangeHandler} required>
                                                <option value="">Choose...</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Thailand">Thailand</option>
                                          </select>
                                          <div className="invalid-feedback">
                                                Please select a valid country.
                                          </div>
                                    </div>
                                    {/* <div className="col-md-4 mb-3">
                                          <label htmlFor="state">State</label>
                                          <select className="custom-select d-block w-100" id="state" required>
                                                <option value="">Choose...</option>
                                                <option>California</option>
                                          </select>
                                          <div className="invalid-feedback">
                                                Please provide a valid state.
                                          </div>
                                    </div> */}
                                    <div className="col-md-3 mb-3">
                                          <label htmlFor="zip">Zip</label>
                                          <input type="text" className="form-control" id="zip" onBlur={this.pickUpZipChangeHandler} required />
                                          <div className="invalid-feedback">
                                                Zip code required.
                                          </div>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                          <label htmlFor="zip">Pick-up Time</label>
                                          <input type="text" className="form-control" id="zip" onBlur={this.pickUpTimeChangeHandler} required />
                                          <div className="invalid-feedback">
                                                Time required.
                                          </div>
                                    </div>
                              </div>
                              <hr className="mb-4" />

                              <h4>Receiver information</h4>
                              <br />
                              <div className="row">
                                    <div className="col-md-6 mb-3">
                                          <label htmlFor="firstName">Name</label>
                                          <input type="text" className="form-control" id="firstName" placeholder="" required onBlur={this.toNameChangeHandler} />
                                          <div className="invalid-feedback">
                                          Valid first name is required.
                                          </div>
                                    </div>
                              </div>

                              <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" onBlur={this.toEmailChangeHandler} />
                                    <div className="invalid-feedback">
                                    Please enter a valid email address.
                                    </div>
                              </div>

                              <div className="mb-3">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="form-control" id="email" placeholder="mysecretpassword" onBlur={this.toPasswordChangeHandler} />
                                    <div className="invalid-feedback">
                                    Please enter a valid password.
                                    </div>
                              </div>

                              <div className="mb-3">
                                    <label htmlFor="">Contact</label>
                                    <input type="text" className="form-control" id="email" placeholder="91234567" onBlur={this.toContactChangeHandler} />
                                    <div className="invalid-feedback">
                                    Please enter a valid contact.
                                    </div>
                              </div>
                              <hr className="mb-4" />

                              <h4>Delivery Information</h4>
                              <br />
                              <div className="mb-3">
                                    <label htmlFor="address">Delivery Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required onBlur={this.deliveryAddressChangeHandler} />
                                    <div className="invalid-feedback">
                                    Please enter your delivery address.
                                    </div>
                              </div>

                              <div className="row">
                                    <div className="col-md-5 mb-3">
                                          <label htmlFor="country">Country</label>
                                          <select className="custom-select d-block w-100" id="country" required onChange={this.deliveryCountryChangeHandler}>
                                                <option value="">Choose...</option>
                                                <option>Singapore</option>
                                                <option>Thailand</option>
                                          </select>
                                          <div className="invalid-feedback">
                                                Please select a valid country.
                                          </div>
                                    </div>
                                    {/* <div className="col-md-4 mb-3">
                                          <label htmlFor="state">State</label>
                                          <select className="custom-select d-block w-100" id="state" required>
                                                <option value="">Choose...</option>
                                                <option>California</option>
                                          </select>
                                          <div className="invalid-feedback">
                                                Please provide a valid state.
                                          </div>
                                    </div> */}
                                    <div className="col-md-3 mb-3">
                                          <label htmlFor="zip">Zip</label>
                                          <input type="text" className="form-control" id="zip" placeholder="" required onBlur={this.deliveryZipChangeHandler} />
                                          <div className="invalid-feedback">
                                                Zip code required.
                                          </div>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                          <label htmlFor="zip">Delivery Time</label>
                                          <input type="text" className="form-control" id="zip" onBlur={this.deliveryTimeChangeHandler} required />
                                          <div className="invalid-feedback">
                                                Time required.
                                          </div>
                                    </div>
                              </div>
                              <hr className="mb-4" />


                              {/* <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="same-address" />
                                    <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="save-info" />
                                    <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                              </div>
                              <hr className="mb-4" /> */}

                              {/* <h4 className="mb-3">Payment</h4>

                              <div className="d-block my-3">
                                    <div className="custom-control custom-radio">
                                          <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                          <label className="custom-control-label" htmlFor="credit">Credit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                          <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                          <label className="custom-control-label" htmlFor="debit">Debit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                          <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                                          <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-md-6 mb-3">
                                          <label htmlFor="cc-name">Name on card</label>
                                          <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                          <small className="text-muted">Full name as displayed on card</small>
                                          <div className="invalid-feedback">
                                                Name on card is required
                                          </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                          <label htmlFor="cc-number">Credit card number</label>
                                          <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                          <div className="invalid-feedback">
                                                Credit card number is required
                                          </div>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-md-3 mb-3">
                                          <label htmlFor="cc-expiration">Expiration</label>
                                          <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                          <div className="invalid-feedback">
                                                Expiration date required
                                          </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                          <label htmlFor="cc-expiration">CVV</label>
                                          <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                          <div className="invalid-feedback">
                                                Security code required
                                          </div>
                                    </div>
                              </div> */}
                        </form>
                              <hr className="mb-4" />
                              


      {/* end actual form */}




                              {/* start cart total */}
                              <div className="row">
                              <div className="col-md-4 order-md-2 mb-4">
                              <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-muted">Your cart</span>
                                    <span className="badge badge-secondary badge-pill">3</span>
                              </h4>
                              <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                          <div>
                                                <h6 className="my-0">Product name</h6>
                                                <small className="text-muted">Brief description</small>
                                          </div>
                                          <span className="text-muted">$12</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                          <div>
                                                <h6 className="my-0">Second product</h6>
                                                <small className="text-muted">Brief description</small>
                                          </div>
                                          <span className="text-muted">$8</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                          <div>
                                                <h6 className="my-0">Third item</h6>
                                                <small className="text-muted">Brief description</small>
                                          </div>
                                          <span className="text-muted">$5</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between bg-light">
                                          <div className="text-success">
                                                <h6 className="my-0">Promo code</h6>
                                                <small>EXAMPLECODE</small>
                                          </div>
                                          <span className="text-success">-$5</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                          <span>Total (USD)</span>
                                          <strong>$20</strong>
                                    </li>
                              </ul>

                              <form className="card p-2">
                                    <div className="input-group">
                                          <input type="text" className="form-control" placeholder="Promo code" />
                                          <div className="input-group-append">
                                                <button type="submit" className="btn btn-secondary">Redeem</button>
                                          </div>
                                    </div>
                              </form>
                              </div>
                              </div>
                              {/* end cart total */}
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.handleSubmit} >Continue to checkout</button>
                        
                        <br />
                  </div>
            </div>
          
 
        );
      }
    }

//     export default GoogleApiWrapper({
//       apiKey: ('AIzaSyBzqaIAJy2NlzQqOu2FM-ts3oMxrGaQd38')
//     })(NewDelivery);

export default NewDelivery;