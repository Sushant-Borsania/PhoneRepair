import React, { Component } from "react";
import DateConfirmation from "./DateConfirmation";
import IssuePicker from "./IssuePicker";
import StoreFetcher from "./StoreFetcher";
import "react-datepicker/dist/react-datepicker.css";
class DateIssue extends Component {
  state ={
    show: false
  }

  clicker = () => {
    this.setState({
      show: true
    })
  }
  render() {

    return (
      <div>
        <DateConfirmation clicker={this.clicker} />
        <br />
        {this.state.show && <IssuePicker history={this.props.history}/>}
        <br />
        <StoreFetcher />
      </div>
    );
  }
}

export default  DateIssue;