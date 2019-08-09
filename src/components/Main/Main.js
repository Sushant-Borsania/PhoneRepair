import React, { Component } from "react";
import Hero from "../layout/Hero";
import Services from "../layout/Services";
import Footer from "../layout/Footer";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Services />
        <Footer />
      </div>
    );
  }
}
