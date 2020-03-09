import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
    <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    <li>
        <Link to="/saftey"><i className="fas fa-hard-hat"></i>{' '}<span className="hide-sm">Saftey</span></Link>
      </li>
      <li>
        <Link to="/cars"><i className="fas fa-car"></i>{" "}<span className="hide-sm">Cars</span></Link>
      </li>
      <li>
      <Link to="/weight"><i className="fas fa-balance-scale-right"></i>{" "}<span className="hide-sm">Weights</span></Link>
    </li>
      
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a href="#!">Racers</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        AAS TracTek
      </Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
