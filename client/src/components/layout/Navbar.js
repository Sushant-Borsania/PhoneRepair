import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  componentDidMount() {
    const btn = document.getElementById("toggler");
    btn.addEventListener("click", toggler);

    function toggler() {
      document.getElementById("navs").classList.toggle("hidden");
      document.getElementById("navs").classList.add("myanimation");
    }
  }
  render() {
    return (
      <div className="container">
        <nav className="navigation big">
          <div className="navigation-left">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="service-icon">
              <use xlinkHref={`${"/images/sprite.svg#icon-codepen"}`}></use>
            </svg>
            <h2 className="brand-name">Fix@doorstep</h2>
          </div>
          <div className="navigation-right">
            <ul className="navigation-list">
              <NavLink to="/" exact className="navigation-list__item">
                <li>Home</li>
              </NavLink>
              {/* <NavLink to="/about" className="navigation-list__item">
                <li>About</li>
              </NavLink> */}
              <NavLink to="/phoneRepair" className="navigation-list__item">
                <li>Book an agent</li>
              </NavLink>
              <NavLink to="/ContactMe" className="navigation-list__item">
                <li>
                  <button className="secondary_btn">Contact Me</button>
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="container-small">
            <button className="toggler" id="toggler">
              Menu
            </button>
            <nav className="navigation-small hidden" id="navs">
              <ul className="small-lists">
                <NavLink to="/" exact className="navigation-list__item small-list">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/phoneRepair" className="navigation-list__item small-list">
                  <li>Services</li>
                </NavLink>
                <NavLink to="/ContactMe" className="navigation-list__item small-list">
                  <li>Contact Me</li>
                </NavLink>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    );
  }
}
