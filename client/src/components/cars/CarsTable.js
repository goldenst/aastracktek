import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CarsTable = ({ cars }) => {

  const carsd = cars.map(car => (
   
    <tr key={car._id}>
      <td>{car.carNum}</td>
      <td>{car.division}</td>
      <td>{car.textNumber}</td>
      <td>
        <button className="btn btn-dager">Edit </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Registered Cars</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Car Number</th>
            <th>Division</th>
            <th>Contact Text Number</th>
          </tr>
        </thead>
        <tbody>{carsd}</tbody>
      </table>
    </Fragment>
  );
};

CarsTable.propTypes = {
  cars: PropTypes.array.isRequired
};

export default CarsTable;
