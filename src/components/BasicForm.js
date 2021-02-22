import React from "react";

const BasicForm = ({
  handleChange,
  handleSubmit,
  values,
  errors,
  touched
}) => (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
            <input
                type="text"
                className="form-control"
                name="username"
                onChange={handleChange}
                value={values.username}
                placeholder="Enter username"/>
                {touched.username && errors.username && (
                    <p className="error-msg">{errors.username}</p>
                )}
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Enter email"/>
                {touched.email && errors.email && (
                    <p className="error-msg">{errors.email}</p>
                )}
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                onChange={handleChange}
                value={values.password}
                name="password"/>
                {touched.password && errors.password && (
                    <p className="error-msg">{errors.password}</p>
                )}
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
            <input
                type="password"
                placeholder="Enter password again"
                className="form-control"
                onChange={handleChange}
                value={values.password2}
                name="password2"/>
                {touched.password2 && errors.password2 && (
                    <p className="error-msg">{errors.password2}</p>
                )}
        </div>
        <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">Submit</button>
        </div>
  </form>
);

export default BasicForm;
