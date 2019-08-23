import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createBrand } from "../../store/actions/createDetails";

class PhoneRepair extends Component {
  constructor(props) {
    super(props);
    this.phoneContent = [];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    const brand = this.phoneContent[e].textContent;
    this.props.createBrand(brand);
  };

  render() {
    return (
      <div className="container">
        <div className="heading">
          <h2>Phone Repair - this is the company names</h2>
        </div>
        <div className="details">
          {this.props.companyName.project.map((company, key) => {
            return (
              <Link to={`/phoneRepair/${company.id}`} onClick={() => this.handleClick(key)} key={key}>
                <div
                  className="details-phoneRepair"
                  ref={ref => {
                    this.phoneContent[key] = ref;
                  }}
                >
                  {company.companyName}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    companyName: state.phoneReducers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBrand: details => dispatch(createBrand(details))
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(PhoneRepair);
