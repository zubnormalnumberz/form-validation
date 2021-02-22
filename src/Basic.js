import React from "react";
import { Formik } from "formik";
import BasicForm from "./components/BasicForm.js";

const validation = values => {
  let errors = {};

  if (!values.username) {
    errors.username = "Usermame is required";
  } else if (values.username.length < 3) {
    errors.username = "Name has to be 3 character at less";
  }

  if (!values.email) {
       errors.email = 'Email is eequired';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password has to be 6 character at less";
  } else if(!/^(?=.{6,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*[<>`])[^.,:;'!@#$%^&*_+=|(){}[?\-\]\/\\]*[.,:;'!@#$%^&*_+=|(){}[?\-\]\/\\][^.,:;'!@#$%^&*_+=|(){}[?\-\]\/\\]*$/i.test(values.password)){
    errors.password = "Wrong password format: numbers, lowercase, uppercase and a symbol";
  }

  if (!values.password2) {
    errors.password2 = "Password confirmation is required";
  } else if (values.password.localeCompare(values.password2) !== 0) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
};

const Basic = () => (
  <Formik
    initialValues={{
      username: "",
      email: "",
      password: "",
      password2: ""
    }}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      console.log(actions);
      actions.setSubmitting(false);
    }}
    validate={validation}
  >
    {props => <BasicForm {...props} />}
  </Formik>
);

export default Basic;
