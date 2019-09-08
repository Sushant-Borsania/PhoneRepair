import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createModel, clearColor } from "../../store/actions/createDetails";
import Footer from "../layout/Footer";
// import StoreFetcher from "../Floating/StoreFetcher";

class PhoneSelection extends Component {
  constructor(props) {
    super(props);
    this.phoneModel = [];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    const model = this.phoneModel[e].textContent;
    this.props.createModel(model);
    this.props.clearColor();
  };

  render() {
    return (
      <div className="wrapper-ps">
        <div className="container-pr-2">
          <div>
            <div className="heading-pr">
              <h2>Please let us know which model you want us to repair?</h2>

            </div>

            <div className="details-pr">
              {this.props.companyName.phoneReducers.project.map(phone => {
                if (phone.id === this.props.match.params.brand) {
                  return phone.phones.map((p, key) => (
                    <Link className="details-pr__item" to={`/phoneRepair/${phone.id}/${p.alias}`} key={key} onClick={() => this.handleClick(key)}>
                      <div
                        ref={ref => {
                          this.phoneModel[key] = ref;
                        }}
                      >
                        {p.phoneName}
                      </div>
                    </Link>
                  ));
                }
              })}
            </div>
            <h4 className="sub-headings">You pay only after device get repaired!</h4>
          </div>
          <div className="floater">
            <div className="heading-pr-i">
              <h2>Your Selections</h2>
            </div>
            <p className="floater-detail">
               <b>Company:</b> &nbsp; {this.props.userSelections.company}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    companyName: state,
    userSelections: state.userSelections
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createModel: details => dispatch(createModel(details)),
    clearColor: () => dispatch(clearColor())
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(PhoneSelection);
