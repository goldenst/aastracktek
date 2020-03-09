import axios from "axios";
import { setAlert } from "./alert";

import { GET_CARS, CAR_ERROR } from "./types";

// Get all Cars
export const getCars = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/cars");

    dispatch({
      type: GET_CARS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAR_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
};

// Create or update a car
export const createCar = (
  FormData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/v1/cars", FormData, config);

    dispatch({
      type: GET_CARS,
      payload: res.data
    });

    dispatch(setAlert(edit ? " Car Updated" : 'Car Created'))

    if(!edit) {
      history.push('/cars')
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: CAR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
