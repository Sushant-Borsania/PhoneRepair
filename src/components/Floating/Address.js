import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import axios from "axios";

import * as Yup from "yup";

class Address extends Component {
  constructor(props) {
    super(props);
    const { isSubmitting, handleSubmit } = props;
  }

  render() {
    return (
      <Form className="container">
        <div>
          {this.props.touched.FirstName && this.props.errors.FirstName && <p>{this.props.errors.FirstName}</p>}
          <Field type="text" name="FirstName" placeholder="FirstName" /> <br />
        </div>
        <div>
          {this.props.touched.LastName && this.props.errors.LastName && <p>{this.props.errors.LastName}</p>}
          <Field type="text" name="LastName" placeholder="LastName" />
          <br />
        </div>
        <div>
          {this.props.touched.Email && this.props.errors.Email && <p>{this.props.errors.Email}</p>}
          <Field type="email" name="Email" placeholder="Email Address" />
        </div>
        <br />
        <Field type="text" name="Address" placeholder="Address" />
        <br />
        <label>
          <br />
          Would you permit us to work in your house?
          <Field type="checkbox" name="HomePermit" checked={this.props.values.HomePermit} />
        </label>
        <br />
        <label>Where do we work? In our car or your home?</label>
        <Field component="select" name="permit">
          <option value="Car">Car</option>
          <option value="Home">Home</option>
        </Field>
        <br />
        <button disabled={this.props.isSubmitting}>Submit</button>
      </Form>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToValues(props) {
    return {
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
    console.log("PRRRROPS", props);
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
        console.log(response);
        // alert('You sent an email!!');
        setSubmitting(false);
        resetForm();
        props.history.push("/");
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
