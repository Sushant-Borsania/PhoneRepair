import React, { Component } from "react";
import { Link } from "react-router-dom";

class Services extends Component {
  render() {
    return (
      <div>
        <h4>Services</h4>
        <div className="container">
          <div className="heading">Services</div>
          <div className="details">
            <Link to={"/phoneRepair"}>
              <div className="details-phoneRepair">Phone Repair</div>
            </Link>
            <div className="details-phoneRefurb">Refurbished Phone</div>
            <div className="details-phoneUnlock">Unlocked Phone</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
