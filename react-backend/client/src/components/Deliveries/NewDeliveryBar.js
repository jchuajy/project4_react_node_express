import React, { Component } from 'react';
import './NewDeliveryBar.css';
import {GoogleApiWrapper} from 'google-maps-react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class NewDeliveryBar extends Component {

      constructor() {
            super();

            this.handleSubmit = this.handleSubmit.bind( this );

            this.pickupAutoComplete = this.pickupAutoComplete.bind( this );
            this.deliveryAutoComplete = this.deliveryAutoComplete.bind( this );
            this.deliveryWeightChangeHandler = this.deliveryWeightChangeHandler.bind( this );

            this.state = {
                  pickUpCountry: "",
                  pickUpZip: "",
                  deliveryCountry: "",
                  deliveryZip: "",
                  pickupAddress: null,
                  deliveryAddress: null,
                  deliveryWeight: null
            }
      };

      static propTypes = {
            cookies: instanceOf(Cookies).isRequired
      };

      componentDidMount() {
            this.pickupAutoComplete();
            this.deliveryAutoComplete();

            const { cookies } = this.props;
      };

      pickupAutoComplete() {
            let { google } = this.props;
            const options = {
                  types: ['address'],
                  componentRestrictions: {'country': ['sg', 'th']}
            };
        
        
            let pickupAutocomplete = new google.maps.places.Autocomplete(this.pickupAutocomplete, options);
        
            pickupAutocomplete.addListener('place_changed', () => {
                  let pickupPlace = pickupAutocomplete.getPlace();
            
                  if (!pickupPlace.geometry) return;
                  
                  this.setState({ pickUpAddress: pickupPlace.formatted_address });

                  for (let i = 0; i < pickupPlace.address_components.length; i++) {
                        if (pickupPlace.address_components[i].types[0] === "country") {

                              this.setState({ pickUpCountry: pickupPlace.address_components[i].long_name});
                        } else if (pickupPlace.address_components[i].types[0] === "postal_code") {

                              this.setState({ pickUpZip: pickupPlace.address_components[i].long_name});
                        };
                  } ;

            });
      };
      

      deliveryAutoComplete() {
            let { google } = this.props;
            const options = {
                  types: ['address'],
                  componentRestrictions: {'country': ['sg', 'th']}
            };
        
            let deliveryAutocomplete = new google.maps.places.Autocomplete(this.deliveryAutocomplete, options);
        
            deliveryAutocomplete.addListener('place_changed', () => {
                  let deliveryPlace = deliveryAutocomplete.getPlace();
            
                  if (!deliveryPlace.geometry) return;

                  this.setState({ deliveryAddress: deliveryPlace.formatted_address });

                  for (let i = 0; i < deliveryPlace.address_components.length; i++) {
                        if (deliveryPlace.address_components[i].types[0] === "country") {

                              this.setState({ deliveryCountry: deliveryPlace.address_components[i].long_name});
                        } else if (deliveryPlace.address_components[i].types[0] === "postal_code") {

                              this.setState({ deliveryZip: deliveryPlace.address_components[i].long_name});
                        };
                  } ;
            });
      };

      deliveryWeightChangeHandler(event) {

            this.setState({deliveryWeight:event.target.value});
      };



      handleSubmit(event){ 
            const { cookies } = this.props;

            event.preventDefault();

            let bodyJSON = {
                  "pickUpAddress": this.state.pickUpAddress,
                  "pickUpCountry": this.state.pickUpCountry,
                  "pickUpZip": this.state.pickUpZip,
                  "deliveryAddress": this.state.deliveryAddress,
                  "deliveryCountry": this.state.deliveryCountry,
                  "deliveryZip": this.state.deliveryZip,
                  "deliveryWeight": this.state.deliveryWeight
            };

            cookies.set('pickUpAddress', this.state.pickUpAddress, { path: '/' });
            cookies.set('pickUpCountry', this.state.pickUpCountry, { path: '/' });
            cookies.set('pickUpZip', this.state.pickUpZip, { path: '/' });
            cookies.set('deliveryAddress', this.state.deliveryAddress, { path: '/' });
            cookies.set('deliveryCountry', this.state.deliveryCountry, { path: '/' });
            cookies.set('deliveryZip', this.state.deliveryZip, { path: '/' });
            cookies.set('deliveryWeight', this.state.deliveryWeight, { path: '/' });

            document.getElementById("modalContents").innerHTML = '<h1 className="animated jackInTheBox">1000</h1>'

            fetch('/deliveries/new', {
                        method: 'POST',
                        headers: new Headers({'Content-Type':'application/json'}),
                        credentials: 'include',
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

            const { name } = this.state;

        return (
      
            <div className="barContainer" id="barContainer">
            
                  <div className="input-group mb-3 longField">
                        <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon3"><strong>From: </strong></span>
                        </div>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" ref={ref => (this.pickupAutocomplete = ref)} />
                  </div>

                  <div className="input-group mb-3 longField">
                        <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon3"><strong>To: </strong></span>
                        </div>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" ref={ref => (this.deliveryAutocomplete = ref)} />
                  </div>

                  <div className="input-group mb-3 shortField">
                        <input type="text" className="form-control" placeholder='"1.2"' aria-describedby="basic-addon2" onBlur={this.deliveryWeightChangeHandler} />
                        <div className="input-group-append">
                              <span className="input-group-text" id="basic-addon2"><strong>kg</strong></span>
                        </div>
                  </div>

                  <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Get a quote!</button>


                  
                  
            </div>
          
 
        );
      }
    }

const mapWrapped = GoogleApiWrapper({
      apiKey: ('AIzaSyBzqaIAJy2NlzQqOu2FM-ts3oMxrGaQd38')
    })(NewDeliveryBar);

const allWrapped = withCookies(mapWrapped);

export default allWrapped;