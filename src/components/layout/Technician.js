import React, { Component } from "react";

export default class Technician extends Component {
  render() {
    return (
      <div className="technician-container">
        <div className="technician-heading">
          <h4>Technicians</h4>
        </div>
        <div className="technician-content">
          <div className="technician-content__1">
            <img src="images/tech_1.png" alt="tech_1" className="tech-img" />
            <h4 className="tech-name">Matthew Encina</h4>
            <p className="tech-description">iPhone Repair Specialist</p>
          </div>
          <div className="technician-content__2">
            <img src="images/tech_2.png" alt="tech_2" className="tech-img" />
            <h4 className="tech-name">Jonas Parker</h4>
            <p className="tech-description">Android Repair Specialist</p>
          </div>
          <div className="technician-content__3">
            <img src="images/tech_3.png" alt="tech_3" className="tech-img" />
            <h4 className="tech-name">Michael Jordan</h4>
            <p className="tech-description">TV Repair Specialist</p>
          </div>
        </div>
      </div>
    );
  }
}
