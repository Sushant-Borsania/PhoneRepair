import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ThankYou extends Component {
  render() {
    return (
      <div className="noadd-container">
        <p className="noadd-content">Thank you for contacting us! We have sent an email with required details.</p>
        <p className="noadd-content">Our agent will be on their way at specified time and date. Mean while you can check our locations.</p>
        <div className="concept-content">
          <div className="concept-content_1">
            <h6 className="concept-content_heading">1. Sharewood park</h6>
            <p className="concept-content_detail">14585,69 street 148Ave SW Edmonton</p>
          </div>
          <div className="concept-content_2">
            <h6 className="concept-content_heading">2. West Edmonton Mall</h6>
            <p className="concept-content_detail">14585,69 street 148Ave SW Edmonton</p>
          </div>
          <div className="concept-content_3">
            <h6 className="concept-content_heading">3. Millwoods area</h6>
            <p className="concept-content_detail">14585,69 street 148Ave SW Edmonton</p>
          </div>
        </div>
        <Link to="/" className="noadd-btn">
          <button className="concept-content_subbutton ">Go back to Home</button>
        </Link>
      </div>
    );
  }
}
