import React, { Component } from "react";
import { Link } from "react-router-dom";

class Services extends Component {
  render() {
    return (
      <div className="services-container">
        <div className="services-heading">
          <h4>Services</h4>
        </div>
        <div className="services-content">
          <Link to={"/phoneRepair"} className="services-content__1">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="service-icon">
                <use xlinkHref={`${"images/sprite.svg#icon-mobile"}`}></use>
              </svg>
            </div>
            <h5 className="service-header">phone repair</h5>
          </Link>
          <div className="services-content__2 muted">
            <div className="services-content__2">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="service-icon">
                <use xlinkHref={`${"images/sprite.svg#icon-library"}`}></use>
              </svg>
            </div>
            <h5 className="service-header">Wall Mounting</h5>
            <span>(Currently unavailable)</span>
          </div>
          <div className="services-content__3 muted">
            <div className="services-content__3">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="service-icon">
                <use xlinkHref={`${"images/sprite.svg#icon-display "}`}></use>
              </svg>
            </div>
            <h5 className="service-header">TV repair</h5>
            <span>(Currently unavailable)</span>
          </div>
          <div className="services-content__4 muted">
            <div className="services-content__4">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="service-icon">
                <use xlinkHref={`${"images/sprite.svg#icon-connection"}`}></use>
              </svg>
            </div>
            <h5 className="service-header">Wifi set-up</h5>
            <span>(Currently unavailable)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
