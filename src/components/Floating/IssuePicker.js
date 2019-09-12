import React, { Component } from "react";
import { connect } from "react-redux";
import { createCost, createIssues } from "../../store/actions/createDetails";
// import StoreFetcher from "./StoreFetcher";

class IssuePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [
        {
          id: 1,
          name: "Screen Cracked",
          isSelected: false,
          cost: 100
        },
        {
          id: 2,
          name: "Battery Replacement",
          isSelected: false,
          cost: 250
        },
        {
          id: 3,
          name: "Does not turn on",
          isSelected: false,
          cost: 350
        },
        {
          id: 4,
          name: "Speaker issue",
          isSelected: false,
          cost: 250
        }
      ],
      totalCost: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.calculator = this.calculator.bind(this);
    this.submitDetails = this.submitDetails.bind(this);
    this.navigateBtn = this.navigateBtn.bind(this);
  }
  handleClick(_, key) {
    this.setState(
      prevState => {
        const issues = [...prevState.issues];
        issues[key] = { ...issues[key], isSelected: !issues[key].isSelected };
        return { issues };
      },
      () => this.calculator()
    );
  }
  calculator() {
    const filtered = this.state.issues.filter(issue => issue.isSelected === true);
    const totalCost = filtered.reduce((acc, cur) => acc + cur.cost, 0);
    this.setState(
      {
        totalCost: totalCost
      },
      () => this.submitDetails()
    );
    //arr of details submission
    this.props.createIssues(filtered);
  }

  submitDetails = () => {
    console.log("ram");
    //cost submission
    this.props.createCost(this.state.totalCost);
  };
  navigateBtn = path => {
    this.props.history.push(path);
  };

  render() {
    const isState = this.props.userSelections.cost;
    let btn;
    if (isState) {
      btn = (
        <button className="btn-3" onClick={() => this.navigateBtn("/phoneRepair/zip-code")}>
          Next
        </button>
      );
    } else {
      btn = (
        <button className="btn-3" disabled>
          Please select the issue
        </button>
      );
    }
    return (
      <div className="date-container">
        <h2 className="sub-headings">
          Please let us know the issue(s) with device.
        </h2>
        <div className="issues date-details">
          {this.state.issues.map((issue, key) => (
            <div className="box-issues" key={key}>
              <div className="box-issue" id={key} onClick={e => this.handleClick(e, key)}>
                {issue.isSelected ? (
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="issue-icon">
                    <use xlinkHref={`${"/images/sprite.svg#icon-checkmark"}`}></use>
                  </svg>
                ) : (
                  <span>&nbsp;</span>
                )}
                <p>{issue.name}</p>
                <p>${issue.cost}</p>
              </div>
            </div>
          ))}
        </div>
        {btn}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    createCost: details => dispatch(createCost(details)),
    createIssues: details => dispatch(createIssues(details))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuePicker);
