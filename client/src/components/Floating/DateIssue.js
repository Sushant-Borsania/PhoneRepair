import React, { Component } from "react";
import DateConfirmation from "./DateConfirmation";
import IssuePicker from "./IssuePicker";
import StoreFetcher from "./StoreFetcher";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../layout/Footer";
class DateIssue extends Component {
  state = {
    show: false
  };

  clicker = () => {
    this.setState({
      show: true
    });
  };
  render() {
    return (
      <div className="wrapper-ps">
        <div className="container-pr-2">
          <div className="left-content">
            <DateConfirmation clicker={this.clicker} />
            {this.state.show && <IssuePicker history={this.props.history} />}
            <br />
          </div>
          <div className="floater">
            <StoreFetcher />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DateIssue;
