import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Concept extends Component {
  render() {
    return (
      <div className="concept-container">
        <div className="concept-heading">
          <h4>What's the concept?</h4>
        </div>
        <div className="concept-content">
          <div className="concept-content_1">
            <h6 className="concept-content_heading">1. Booking an Appointment</h6>
            <p className="concept-content_detail">You just need to visit our website, book an appointment providing us your convenient time and place to get your device up and running.</p>
            <Link to="/phoneRepair" className="concept-content_subbutton">
              <span>Book now &nbsp; &#8594;</span>
            </Link>
          </div>
          <div className="concept-content_2">
            <h6 className="concept-content_heading">2. Visit by a repair agent</h6>
            <p className="concept-content_detail">You just need to visit our website, book an appointment providing us your convenient time and place to get your device up and running.</p>
            <span className="concept-content_subbutton" style={{color: "black", pointerEvents: "none", border: "none"}}>Checkout our agents below</span>
          </div>
          <div className="concept-content_3">
            <h6 className="concept-content_heading">3. Get back your device up and running</h6>
            <p className="concept-content_detail">You just need to visit our website, book an appointment providing us your convenient time and place to get your device up and running.</p>
            <Link to="/phoneRepair" className="concept-content_subbutton">
            <span>Yes I'm in! &nbsp; &#8594;</span>

            </Link>
          </div>
        </div>
        <div className="concept-promotion">
          <h2 className="concept-promotion_heading">Pay by either credit card or debt card only after your device get repaired. Satisfaction guaranteed!</h2>
        </div>
      </div>
    );
  }
}
