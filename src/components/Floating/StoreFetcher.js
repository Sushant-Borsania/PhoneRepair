import React, { Component } from "react";
import { connect } from "react-redux";

class StoreFetcher extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h2>Your Selection</h2>
        <ul>
          {this.props.company && <li className="container-company">Company: {this.props.company}</li>}
          {this.props.model && <li className="container-model">model: {this.props.model}</li>}
          {this.props.color && <li className="container-color">color: {this.props.color}</li>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.userSelections;
};

export default connect(mapStateToProps)(StoreFetcher);
