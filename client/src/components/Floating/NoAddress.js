import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NoAddress extends Component {
  render() {
    return (
      <div className="noadd-container">
        <p className="noadd-content">Thank you for contacting us but currently we dont provide service in your area.</p>
        <p className="noadd-content">You may contact us by visiting one of our locations listed as below</p>
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
