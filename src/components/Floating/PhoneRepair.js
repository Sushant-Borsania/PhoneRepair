import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createBrand } from "../../store/actions/createDetails";
import Footer from "../layout/Footer";

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
      <div className="container-pr">
        <div className="heading-pr">
          <h2>Please let us know which device brand you want us to repair?</h2>
        </div>
        <div className="details">
          <h2>We repair below brands:</h2>
          
          <div className="details-pr">
            {this.props.companyName.project.map((company, key) => {
              return (
                <Link className="details-pr__item" to={`/phoneRepair/${company.id}`} onClick={() => this.handleClick(key)} key={key}>
                  <div
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
        <h4 className="sub-headings">Please note we have 90 days money back gurantee!</h4>
        <Footer/>
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
