import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createColor } from "../../store/actions/createDetails";

class PhoneColorSelection extends Component {
  constructor(props) {
    super(props);
    this.phoneColor = [];
    this.handleClick = this.handleClick.bind(this);
    this.navigateBtn = this.navigateBtn.bind(this);
  }
  handleClick = e => {
    const color = this.phoneColor[e].textContent;
    this.props.createColor(color);
    console.log("color selecting");
  };

  navigateBtn = path => {
    console.log("calling fun");
    this.props.history.push(path);
  };
  render() {
    const colors = this.props.color[0].colors;
    const isState = this.props.userSelections.color;
    let btn;
    if (isState) {
      btn = <button onClick={() => this.navigateBtn("/phoneRepair/zip-code")}>Next</button>;
    } else {
      btn = <button disabled>Please select color</button>;
    }
    return (
      <div className="container">
        <div className="details">
          {colors.map((color, key) => {
            return (
              <div key={key} className="container" onClick={() => this.handleClick(key)}>
                <div
                  ref={ref => {
                    this.phoneColor[key] = ref;
                  }}
                >
                  {color}
                </div>
              </div>
            );
          })}
        </div>
        {btn}
        <div className="floater">
          <div className="">Company: {this.props.userSelections.company}</div>
          <div className="">Model: {this.props.userSelections.model}</div>
          <div className="">Color: {this.props.userSelections.color}</div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state, ownProps) => {
  const brand = state.phoneReducers.project.filter(brand => {
    return brand.id === ownProps.match.params.brand;
  });
  const result = brand[0].phones.filter(phone => {
    return phone.alias === ownProps.match.params.color;
  });
  return {
    color: result,
    userSelections: state.userSelections
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createColor: details => dispatch(createColor(details))
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(PhoneColorSelection);
