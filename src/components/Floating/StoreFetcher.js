import React, { Component } from "react";
import { connect } from "react-redux";

class StoreFetcher extends Component {
  render() {
    return (
      <div className="container">
        <h2>Your Selection</h2>
        <ul>
          {this.props.company && <li className="container-company">Company: {this.props.company}</li>}
          {this.props.model && <li className="container-model">model: {this.props.model}</li>}
          {this.props.color && <li className="container-color">color: {this.props.color}</li>}
          {this.props.date && <li className="container-color">Date: {this.props.date}</li>}
          {this.props.time && <li className="container-color">Time: {this.props.time}</li>}
          {this.props.issues &&
            this.props.issues.map(issue => (
              <li>
                {issue.name} - ${issue.cost}
              </li>
            ))}
          {this.props.cost > 0 && <li>Total Cost: ${this.props.cost}</li>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.userSelections;
};

export default connect(mapStateToProps)(StoreFetcher);
