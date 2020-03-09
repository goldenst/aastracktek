import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Dashboard = props => {
  return (
    <div>
      <h3>Todays Schedule</h3>
      <h6 className="strong">
        Pit Gates open<span className="float-right">11:00am</span>
      </h6>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
