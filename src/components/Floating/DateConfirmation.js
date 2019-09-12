import React from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import moment from "moment";
import CustomClass from "./CustomClass";
import { addDays, setHours, setMinutes, addMinutes } from "date-fns";
import { createDate, createTime } from "../../store/actions/createDetails";

class DateConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.calculateMinDate(),
      startTime: this.calculateMinTime(new Date()),
      // endTime: addMinutes(new Date().setHours(10, 0), 30)
      endTime: this.calculateMinEndTime(new Date())
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleTimeEndChange = this.handleTimeEndChange.bind(this);
    this.navigateBtn = this.navigateBtn.bind(this);
    this.calculateMinDate = this.calculateMinDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.nearestMinutes = this.nearestMinutes.bind(this);
    this.calculateMinTime = this.calculateMinTime.bind(this);
    this.calculateMinEndTime = this.calculateMinEndTime.bind(this);
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
    console.log(date);
    this.setState({
      endTime: date
    });
  }

  navigateBtn = path => {
    this.props.history.push(path);
  };

  //hours
  calculateMinDate = () => {
    let endTime = moment("18:00", "HH:mm A");
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
    let endTime = moment("18:00", "HH:mm A");
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

  calculateMinEndTime = date => {
    let isToday = moment(date).isSame(moment(), "day");
    let startTime = moment("10:00", "HH:mm A");
    let endTime = moment("18:00", "HH:mm A");
    if (isToday && moment().isBetween(startTime, endTime)) {
      const nearestMin = this.nearestMinutes(30, moment()).toDate();
      let nowAddOneHalfHour = moment(nearestMin)
        .add({ hours: 1, minute: 30 })
        .toDate();
      return nowAddOneHalfHour;
    } else {
      let time = setHours(setMinutes(new Date(), 30), 10);
      return time;
    }
  };

  updateTime = date => {
    let isToday = moment(date).isSame(moment(), "day");
    let startTime = moment("10:00", "HH:mm A");
    let endTime = moment("18:00", "HH:mm A");
    if (isToday && moment().isBetween(startTime, endTime)) {
      const nearestMin = this.nearestMinutes(30, moment()).toDate();
      let nowAddOneHour = moment(nearestMin)
        .add({ hours: 1 })
        .toDate();
      this.setState({
        startTime: nowAddOneHour,
        endTime: addMinutes(nowAddOneHour, 30)
      });
    } else {
      let time = new Date().setHours(10, 0);
      let et = addMinutes(time, 30);
      this.setState({
        startTime: time,
        endTime: et
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
    return (
      <div className="date-container">
        <div className="heading-pr">
          <h2>Let us know when do you want us to come?</h2>
        </div>
        <div className="DatePicker date-details">
          <div className="date-detail">
            <label htmlFor="">Date: </label>
            <DatePicker
              customInput={<CustomClass />}
              selected={this.state.startDate}
              onChange={this.handleDateChange}
              minDate={new Date()}
              maxDate={addDays(new Date(), 5)}
              withPortal
              placeholderText="Select a date between today and 5 days in the future"
            />
          </div>
          <div className="date-detail">
            <label htmlFor="">Time from: </label>
            <DatePicker
              selected={this.state.startTime}
              onChange={this.handleStartTimeChange}
              showTimeSelect
              showTimeSelectOnly
              minTime={this.state.startTime}
              maxTime={setHours(setMinutes(new Date(), 0), 18)}
              dateFormat="h:mm aa"
              withPortal
            />
          </div>
          <div className="date-detail">
            <label htmlFor="">Time to: </label>
            <DatePicker
              selected={this.state.endTime}
              onChange={this.handleTimeEndChange}
              showTimeSelect
              showTimeSelectOnly
              minTime={addMinutes(this.state.startTime, 30)}
              maxTime={setHours(setMinutes(new Date(), 30), 18)}
              dateFormat="h:mm aa"
              withPortal
            />
          </div>
          <button className="btn-2" onClick={() => this.handleClick()}>
            Confirm Date and Time
          </button>
        </div>
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
