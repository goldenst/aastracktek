import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createWeight } from "../../actions/weights";

const WeightForm = ({ createWeight, history }) => {
  const [formData, setFormData] = useState({
    raceNum: '',
    carNum: "",
    division: "",
    textNumber: ""
  });

  const { carNum, division, qualweight, qualLeft,startRaceWeight, startRaceLeft } = FormData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createWeight(formData, history);
  };

  return (
    <Fragment>
      <h4>Create New Weight</h4>
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
          name="qualweight"
          value={qualweight}
          placeholder="Qualifing Weight"
          onChange={e => onChange(e)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="qualLeft"
          value={qualLeft}
          placeholder="Leftside % Weight"
          onChange={e => onChange(e)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="startRaceWeight"
          value={startRaceWeight}
          placeholder="Start of Race weight"
          onChange={e => onChange(e)}
        />
      </div>
      <div className="form-group">
      <input
        type="text"
        name="startRaceLeft"
        value={startRaceLeft}
        placeholder="Start of Race Leftside %"
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

WeightForm.propTypes = {
  createWeight: PropTypes.func.isRequired
};

export default connect(null, { createWeight })(withRouter(WeightForm));
 