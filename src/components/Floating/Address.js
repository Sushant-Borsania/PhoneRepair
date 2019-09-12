import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import generate from "nanoid/generate";
import Footer from "../layout/Footer";
import StoreFetcher from "../Floating/StoreFetcher";
import axios from "axios";

import * as Yup from "yup";

class Address extends Component {
  constructor(props) {
    super(props);
    const { isSubmitting, handleSubmit } = props;
  }
  render() {
    return (
      <div className="wrapper-ps">
        <div className="container-pr-2">
          <div className="left-content">
            <div className="heading-pr">
              <h2>Please let us know the address.</h2>
            </div>
            <div className="details-pr-2">
              <Form className="form">
                <div className="form-field">
                  <label htmlFor="firstName" style={{ display: "block" }}>
                    FirstName
                  </label>
                  <Field className={this.props.touched.FirstName && this.props.errors.FirstName ? "text-input error" : "text-input"} id="firstName" type="text" name="FirstName" />
                  {this.props.touched.FirstName && this.props.errors.FirstName && <p>{this.props.errors.FirstName}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="LastName" style={{ display: "block" }}>
                    LastName
                  </label>
                  <Field className={this.props.touched.LastName && this.props.errors.LastName ? "text-input error" : "text-input"} id="LastName" type="text" name="LastName" />
                  {this.props.touched.LastName && this.props.errors.LastName && <p>{this.props.errors.LastName}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="email" style={{ display: "block" }}>
                    Email
                  </label>
                  <Field className={this.props.touched.Email && this.props.errors.Email ? "text-input error" : "text-input"} id="email" type="email" name="Email" />
                  {this.props.touched.Email && this.props.errors.Email && <p>{this.props.errors.Email}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="address" style={{ display: "block" }}>
                    Address
                  </label>
                  <Field className={this.props.touched.Address && this.props.errors.Address ? "text-input error" : "text-input"} id="address" type="text" name="Address" />
                  {this.props.touched.Address && this.props.errors.Address && <p>{this.props.errors.Address}</p>}
                </div>
                <div className="form-field custom-flex">
                  <label>Where do we work? In our car or your home?</label>
                  <Field component="select" name="permit" className="selection-btn">
                    <option value="Car">Car</option>
                    <option value="Home">Home</option>
                  </Field>
                </div>
                <button type="submit" disabled={this.props.isSubmitting} className="btn-2">
                  Submit
                </button>
              </Form>
            </div>
          </div>
          <div className="floater">
            <StoreFetcher />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToValues(props) {
    return {
      Reference: generate("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 9),
      FirstName: "",
      LastName: "",
      Email: "",
      Address: "",
      HomePermit: false,
      permit: "Home"
    };
  },

  validationSchema: Yup.object().shape({
    FirstName: Yup.string()
      .min(2)
      .required(),
    LastName: Yup.string()
      .min(2)
      .required(),
    Email: Yup.string()
      .email()
      .required(),
    Address: Yup.string().required()
  }),

  handleSubmit(values, { props, setSubmitting, resetForm }) {
    //Get the data
    const finalData = Object.assign({}, values, props.userSelections);
    //Send the data to node server so that we can send email from server!
    axios
      .post("http://127.0.0.1:4000/phoneRepair/address", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        data: finalData
      })
      .then(function(response) {
        setSubmitting(false);
        resetForm();
        props.history.push("/phoneRepair/ThankYou");
      })
      .catch(function(error) {
        console.log(error.response);
      });
  }
})(Address);

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(FormikForm);