import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomClass extends Component {
  render() {
    return (
      <div type="text" className="btnClass" onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }
}

CustomClass.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default CustomClass;
