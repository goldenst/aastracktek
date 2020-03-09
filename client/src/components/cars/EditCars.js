import React, { useState, Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCar, getCars } from "../../actions/cars";

const EditCar = ({ cars: { cars, loading }, createCar, getCars, history }) => {
  const [formData, setFormData] = useState({
    carNum: "",
    carOwner: "",
    division: "",
    textNumber: ""
  });

  useEffect(() => {
    getCars();

    setFormData({
      carNum: loading || !cars.carNum ? "" : cars.carNum,
      division: loading || !cars.division ? "" : cars.division,
      carOwner: loading || !cars.carOwner ? "" : cars.carOwner,
      textNumber: loading || !cars.textNumber ? "" : cars.textNumber
    });
  }, [loading]);

  const { carNum, carOwner, division, textNumber } = FormData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createCar(formData, history);
  };

  return (
    <Fragment>
      <h4>Create New Car</h4>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            name="carNum"
            value={carNum}
            placeholder="Car Number"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <select name="division" value={division} onChange={e => onChange(e)}>
            <option value="0">Select Division</option>
            <option value="late model">Late Model</option>
            <option value=" jr late model">Jr Late Model</option>
            <option value="super stock">Super Stock</option>
            <option value="limited modifieds">Limited Modified</option>
            <option value="f4">F4</option>
            <option value="mini cups / bandoleros">Mini Cup / Bandoleos</option>
            <option value="enduro">Enduro</option>
            <option value="Trailer">Trailer Bash</option>
            <option value="utv">UTV</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="carOwner"
            value={carOwner}
            placeholder="Car Owner"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="textNumber"
            value={textNumber}
            placeholder="Contact Cell"
            onChange={e => onChange(e)}
          />
        </div>
        <input
          type="submit"
          value="Create Car"
          className="btn btn-primary btn-block"
        />
      </form>
    </Fragment>
  );
};

EditCar.propTypes = {
  createCar: PropTypes.func.isRequired,
  cars: PropTypes.object.isRequired,
  getCars: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cars: state.cars
});

export default connect(mapStateToProps, { createCar, getCars })(
  withRouter(EditCar)
);
