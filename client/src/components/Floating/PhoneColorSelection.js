import React, { Component } from "react";
import { connect } from "react-redux";
import { createColor } from "../../store/actions/createDetails";
import Footer from "../layout/Footer";
import StoreFetcher from "./StoreFetcher";

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
  };

  navigateBtn = path => {
    this.props.history.push(path);
  };
  render() {
    const colors = this.props.color[0].colors;
    const isState = this.props.userSelections.color;
    let btn;
    if (isState) {
      btn = <button className="color-selection" onClick={() => this.navigateBtn("/phoneRepair/date-and-issue")}>Next</button>;
    } else {
      btn = <button className="color-selection" disabled>Please select color</button>;
    }
    return (
      <div className="wrapper-ps">
         <div className="container-pr-2">
          <div className="left-content">
            <div className="heading-pr">
              <h2>Please let us know which model you want us to repair?</h2>
            </div>
            <div className="details-pr">
              {colors.map((color, key) => {
                return (
                  <div key={key} className="details-pr__item" onClick={() => this.handleClick(key)}>
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
            <h4 className="sub-headings">You pay only after device get repaired!</h4>
            {btn}
          </div>
          <div className="floater">
            <StoreFetcher className="floater" />
          </div>
        </div>
        <Footer />
      </div>

      // <div className="container">
      //   <div className="details">
      //     {colors.map((color, key) => {
      //       return (
      //         <div key={key} className="container" onClick={() => this.handleClick(key)}>
      //           <div
      //             ref={ref => {
      //               this.phoneColor[key] = ref;
      //             }}
      //           >
      //             {color}
      //           </div>
      //         </div>
      //       );
      //     })}
      //   </div>
      //   {btn}
      //   <StoreFetcher className="floater"/>
      // </div>
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
