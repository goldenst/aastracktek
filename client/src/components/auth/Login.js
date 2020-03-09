import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";


export const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    login(email, password);
  };

  // Redirect if loged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="card bg-white p-4 mb-4">
            <div className="card-body">
              <h1>
                <i className="fas fa-user-plus"></i> Sign In
              </h1>
              <p>Sign into your account</p>
              <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary btn-block"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
