import React, { Fragment, useState } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    console.log("success");
  };

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

export default Login;
