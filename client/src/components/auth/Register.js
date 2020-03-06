import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from 'prop-types'


export const Register = ({setAlert}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords dont match", 'danger');
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="card bg-white p-4 mb-4">
            <div className="card-body">
              <h1>
                <i className="fas fa-user-plus"></i> Register
              </h1>
              <p>Register to Access our App</p>
              <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
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
                <div className="form-group mb-4">
                  <input
                    type="password"
                    name="password2"
                    className="form-control"
                    placeholder="Confirm password"
                    value={password2}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    value="Register"
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(Register);
