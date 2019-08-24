import React from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import moment from "moment";
import CustomClass from "./CustomClass";
import { addDays, setHours, setMinutes, addMinutes, addSeconds, getMinutes, getHours } from "date-fns";
import { createDate, createTime } from "../../store/actions/createDetails";

import "react-datepicker/dist/react-datepicker.css";
import "../../css/compiledCss/DatePicker.css";

class DateConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.calculateMinDate(),
      startTime: this.calculateMinTime(new Date())
      // endTime: addMinutes(new Date().setHours(10, 0), 30)
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleTimeEndChange = this.handleTimeEndChange.bind(this);
    this.navigateBtn = this.navigateBtn.bind(this);
    this.calculateMinDate = this.calculateMinDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.nearestMinutes = this.nearestMinutes.bind(this);
    this.calculateMinTime = this.calculateMinTime.bind(this);
  }

  handleDateChange(date) {
    this.setState(
      {
        startDate: date
      },
      () => this.updateTime(this.state.startDate)
    );
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

  //hours
  calculateMinDate = () => {
    let endTime = moment("23:00", "HH:mm A");
    if (moment().isAfter(endTime)) {
      let newDate = moment()
        .add(1, "d")
        .toDate();
      return newDate;
    } else {
      let date = moment().toDate();
      return date;
    }
  };

  //Mins
  nearestMinutes = (interval, someMoment) => {
    const roundedMinutes = Math.round(someMoment.clone().minute() / interval) * interval;
    return someMoment
      .clone()
      .minute(roundedMinutes)
      .second(0);
  };

  calculateMinTime = date => {
    let isToday = moment(date).isSame(moment(), "day");
    let startTime = moment("10:00", "HH:mm A");
    let endTime = moment("23:00", "HH:mm A");
    if (isToday && moment().isBetween(startTime, endTime)) {
      const nearestMin = this.nearestMinutes(30, moment()).toDate();
      let nowAddOneHour = moment(nearestMin)
        .add({ hours: 1 })
        .toDate();
      return nowAddOneHour;
    } else {
      let time = new Date().setHours(10, 0);
      return time;
    }
  };

  updateTime = date => {
    let isToday = moment(date).isSame(moment(), "day");
    let startTime = moment("10:00", "HH:mm A");
    let endTime = moment("23:00", "HH:mm A");
    if (isToday && moment().isBetween(startTime, endTime)) {
      const nearestMin = this.nearestMinutes(30, moment()).toDate();
      let nowAddOneHour = moment(nearestMin)
        .add({ hours: 1 })
        .toDate();
      this.setState({
        startTime: nowAddOneHour
      });
    } else {
      let time = new Date().setHours(10, 0);
      this.setState({
        startTime: time
      });
    }
  };

  handleClick = () => {
    const formattedDate = moment(this.state.startDate).format("DD/MMM/YYYY");
    const formattedStartTime = moment(this.state.startTime).format("hh:mm A");
    const formattedendTime = moment(this.state.endTime).format("hh:mm A");
    this.props.createDate(formattedDate);
    this.props.createTime(`${formattedStartTime} - ${formattedendTime}`);
    this.props.clicker();
  };

  render() {
    // this.calculateMinTime(new Date());
    console.log("Getters", getHours(getMinutes(this.state.startDate)));
    console.log(typeof this.state.startTime);
    return (
      <div className="DatePicker">
        <label htmlFor="">Date: </label>
        <DatePicker
          customInput={<CustomClass />}
          selected={this.state.startDate}
          onChange={this.handleDateChange}
          minDate={new Date()}
          maxDate={addDays(new Date(), 5)}
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
          minTime={this.state.startTime}
          maxTime={setHours(setMinutes(new Date(), 0), 23)}
          dateFormat="h:mm aa"
        />
        <label htmlFor="">Time to: </label>
        <DatePicker
          selected={addMinutes(this.state.startTime, 30)}
          onChange={this.handleTimeEndChange}
          showTimeSelect
          showTimeSelectOnly
          minTime={addMinutes(this.state.startTime, 30)}
          maxTime={setHours(setMinutes(new Date(), 0), 23)}
          dateFormat="h:mm aa"
        />
        <br />
        <br />
        <br />
        <button onClick={() => this.handleClick()}>Confirm Date and Time</button>
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
