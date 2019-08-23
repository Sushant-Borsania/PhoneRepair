// import React, { Component } from "react";
// import { connect } from "react-redux";
// import Issue from "./Issue";
// import { fliper } from "../../store/actions/createDetails";

// class IssuePicker extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       costArr: []
//     };
//   }
//   handleClick = details => {
//     console.log("click", details);
//     this.props.fliper(details);
//   };
//   addToOrder = key => {};
//   render() {
//     console.log(this.props.IssuePicker);
//     return (
//       <div className="container">
//         <div className="box">ji</div>
//       </div>
//       // <div className="container">
//       //   <div className="heading">
//       //     <h2>Select the issues</h2>
//       //   </div>
//       //   <div className="issues">
//       //     {this.props.IssuePicker.issues.map((issue, key) => (
//       //       <div className="box" key={key} onClick = {() => this.handleClick(key)} >
//       //         <h4 className="heading">{issue.name}</h4>
//       //         <h3>{issue.cost}</h3>
//       //       </div>
//       //     ))}
//       //   </div>
//       // </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     IssuePicker: state.issueReducers
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fliper: details => dispatch(fliper(details))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(IssuePicker);
// // 