import React, { Component } from "react";
import Hero from "../layout/Hero";
import Services from "../layout/Services";
import Concept from "../layout/Concept";
import Technician from "../layout/Technician";
import Footer from "../layout/Footer";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Hero />
        <Concept/>
        <Services />
        <Technician/>
        <Footer />
      </div>
    );
  }
}
