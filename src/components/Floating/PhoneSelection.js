import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createModel, clearColor } from "../../store/actions/createDetails";
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
      <div className="conatiner">
        <div>This is the list of phones of company previously selected.</div>
        <div className="details">
          {this.props.companyName.phoneReducers.project.map(phone => {
            if (phone.id === this.props.match.params.brand) {
              return phone.phones.map((p, key) => (
                <Link to={`/phoneRepair/${phone.id}/${p.alias}`} key={key} onClick={() => this.handleClick(key)}>
                  <div
                    className="details-phoneRepair"
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
        <div className="floater">
          <div>Company: {this.props.userSelections.company}</div>
        </div>
        {/* <StoreFetcher/> */}
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