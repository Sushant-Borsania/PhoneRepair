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
            <p>LOGO</p>
          </div>
          <div className="navigation-right">
            <ul className="navigation-list">
              <NavLink to="/" exact className="navigation-list__item">
                <li>Home</li>
              </NavLink>
              <NavLink to="/about" className="navigation-list__item">
                <li>About</li>
              </NavLink>
              <NavLink to="/services" className="navigation-list__item">
                <li>Services</li>
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
                <NavLink to="/about" className="navigation-list__item small-list">
                  <li>About</li>
                </NavLink>
                <NavLink to="/services" className="navigation-list__item small-list">
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
