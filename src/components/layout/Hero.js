import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <h2 className="hero-container-heading">Get Your Device Repaired At Your Door Step.</h2>
        <span className="hero-container-tagline">Hence you need not to come to us. Our agent will come to your location and repair your device.</span>
        <Link to={"/phoneRepair"}>
          <button className="cta-1">Book Now</button>
        </Link>
      </div>
    );
  }
}
