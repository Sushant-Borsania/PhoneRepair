import React from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import moment from "moment";
import CustomClass from "./CustomClass";
import { addDays, setHours, setMinutes, addMinutes } from "date-fns";
import { createDate, createTime } from "../../store/actions/createDetails";

import "react-datepicker/dist/react-datepicker.css";
import "../../css/compiledCss/DatePicker.css";

class DateConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.calculateMinDate(),
      startTime: this.calculateMinTime(new Date()),
      endTime: addMinutes(new Date().setHours(10, 0), 30)
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleTimeEndChange = this.handleTimeEndChange.bind(this);
    this.navigateBtn = this.navigateBtn.bind(this);
    this.calculateMinDate = this.calculateMinDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleStartTimeChange(date) {
    this.setState({
      startTime: date,
      endTime: addMinutes(date, 30)
    });
  }

  handleTimeEndChange(date) {
    this.setState({
      endTime: date
    });
  }

  navigateBtn = path => {
    this.props.history.push(path);
  };

  calculateMinDate = () => {
    let startTime = moment("10:00", "HH:mm A");
    let endTime = moment("20:00", "HH:mm A");

    if (moment().isBetween(startTime, endTime)) {
      let date = moment().toDate();
      return date;
    } else {
      let newDate = moment()
        .add(1, "d")
        .toDate();
      return newDate;
    }
  };

  calculateMinTime = date => {
    let isToday = moment(date).isSame(moment(), "day");
    let startTime = moment("10:00", "HH:mm A");
    let endTime = moment("18:00", "HH:mm A");

    if (isToday && moment().isBetween(startTime, endTime)) {
      let nowAddOneHour = moment(new Date())
        .add({ hours: 1 })
        .toDate();
      return nowAddOneHour;
    } else {
      let time = new Date().setHours(10, 0);
      return time;
    }
  };

  // handleDateChange = date => {
  //   this.setState({
  //     closeDate: date,
  //     minTime: this.calculateMinTime(date)
  //   });
  // };

  handleClick = () => {
    const formattedDate = moment(this.state.startDate).format("DD/MMM/YYYY");
    const formattedStartTime = moment(this.state.startTime).format("hh:mm A");
    const formattedendTime = moment(this.state.endTime).format("hh:mm A");
    this.props.createDate(formattedDate);
    this.props.createTime(`${formattedStartTime} - ${formattedendTime}`);
    this.props.history.push("/phoneRepair/zip-code");
  };

  render() {
    return (
      <div className="DatePicker">
        <label htmlFor="">Date: </label>
        <DatePicker
          customInput={<CustomClass />}
          selected={this.state.startDate}
          onChange={this.handleChange}
          minDate={this.state.startDate}
          maxDate={addDays(this.state.startDate, 5)}
          placeholderText="Select a date between today and 5 days in the future"
        />
        <br />
        <br />
        <label htmlFor="">Time from: </label>
        <DatePicker
          selected={this.state.startTime}
          onChange={this.handleStartTimeChange}
          showTimeSelect
          showTimeSelectOnly
          minTime={setHours(setMinutes(new Date(), 0), 10)}
          maxTime={setHours(setMinutes(new Date(), 0), 20)}
          dateFormat="h:mm aa"
        />
        <label htmlFor="">Time to: </label>
        <DatePicker
          selected={this.state.endTime}
          onChange={this.handleTimeEndChange}
          showTimeSelect
          showTimeSelectOnly
          minTime={addMinutes(this.state.startTime, 30)}
          maxTime={setHours(setMinutes(new Date(), 0), 20)}
          dateFormat="h:mm aa"
        />
        <br />
        <br />
        <br />
        <button onClick={() => this.handleClick()}>Next</button>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    userSelections: state.userSelections
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    createDate: details => dispatch(createDate(details)),
    createTime: details => dispatch(createTime(details))
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(DateConfirmation);

//navigateBtn("/phoneRepair/zip-code")
