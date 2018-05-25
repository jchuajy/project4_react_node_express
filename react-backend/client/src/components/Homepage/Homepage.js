import React, { Component } from 'react';
import './Homepage.css';
import NewDeliveryBar from '../Deliveries/NewDeliveryBar';

class Homepage extends Component {

      constructor() {
            super();
      };

      render() {
            return ( 
              <div>

                <div className = "jumbotron" >
                  <div className="splashHeader">
                    <h1 className="display-4 animated fadeIn">Re-think Delivery</h1>
                    <p className="lead">Your best and fastest way to send items overseas.</p>
                  </div>
                  <div className="deliveryBarPosDiv">
                    < NewDeliveryBar />
                  </div>
                </div>

                <div className="infoCards">
                    <div className="card">
                      <img className="card-img-top" src="/003-running.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">FASTER DELIVERY</h5>
                        <p className="card-text"><strong>Within 5 – 8 days</strong> PigeonParcels will deliver your item internationally. Working days, non-working days, holidays, sunny or rainy  days.</p>
                      </div>
                    </div>

                    <div className="card">
                      <img className="card-img-top" src="/002-coin.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">BETTER PRICING</h5>
                        <p className="card-text"><strong>Save up to 50 percent</strong> when you deliver internationally with PigeonParcels – no kidding</p>
                      </div>
                    </div>

                    <div className="card">
                      <img className="card-img-top" src="/001-locked-padlock-outline.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">SAFER JOURNEY</h5>
                        <p className="card-text">Parcels are delivered <strong>safely and reliably</strong> by our flock of Pigeons who are ready for take-off</p>
                      </div>
                    </div>
                </div>

                <div className="homeDivider">
                  <h1>Pigeon Delivery</h1>
                </div>

                <div className="homeDivider">
                  <h1>Pigeon Shopping</h1>
                </div>


              </div>

            );
      }
}

export default Homepage;