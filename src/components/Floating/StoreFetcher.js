import React, { Component } from "react";
import { connect } from "react-redux";

class StoreFetcher extends Component {
  render() {
    return (
      <div className="floater">
        <div className="heading-pr-i">
          <h2>Your Selections</h2>
        </div>
        <ul className="floater-detail floater-list">
          {this.props.company && (
            <li className="container-company">
              <span className="bold">Company:</span> {this.props.company}
            </li>
          )}
          {this.props.model && <li className="container-model"><span className="bold">model:</span> {this.props.model}</li>}
          {this.props.color && <li className="container-color"><span className="bold">color:</span> {this.props.color}</li>}
          {this.props.date && <li className="container-color"><span className="bold">Date:</span> {this.props.date}</li>}
          {this.props.time && <li className="container-color"><span className="bold">Time:</span> {this.props.time}</li>}
          {this.props.issues &&
            this.props.issues.map(issue => (
              <li>
                <span className="bold">{issue.name}</span> - ${issue.cost}
              </li>
            ))}
          {this.props.cost > 0 && <li><span className="bold">Total Cost:</span> ${this.props.cost}</li>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.userSelections;
};

export default connect(mapStateToProps)(StoreFetcher);
