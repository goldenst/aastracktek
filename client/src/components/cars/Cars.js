import React, { useEffect, Fragment } from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCars } from "../../actions/cars";
import Spinner from "../layouts/Spinner";
// import CarsTable from "./CarsTable";
import CarsFilter from "./CarsFilter";

const Cars = ({ getCars, auth: { user }, car: { car, cars, loading } }) => {
  useEffect(() => {
    getCars();
  }, []);

  return loading && cars === null ? (
    <Spinner />
  ) : (
    <Fragment>
    <Link className='btn btn-primary' to='/createcar'>Add Car</Link>
      <h1 className="large text-primary">Registered Cars</h1>
      <CarsFilter />

      {cars !== null ? (
        <Fragment>
          has
        </Fragment>
      ) : (
        <Fragment>No Cars Registered</Fragment>
      )}
    </Fragment>
  );
};

Cars.propTypes = {
  getCars: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  car: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  car: state.cars
});

export default connect(mapStateToProps, { getCars })(Cars);
