import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          AAS TracTek
        </Link>
       
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link  to='Login' className="nav-item nav-link active" >
              login 
            </Link>
            <Link className="nav-item nav-link" to="/register">
              Register
            </Link>
           
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
