import axios from "axios";
import { setAlert } from "./alert";
import { GET_WEIGHTS, WEIGHT_ERROR } from "./types";

// GET Weights
export const getWeights = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/scales')

    dispatch({
      type: GET_WEIGHTS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: WEIGHT_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
}

// Create weight
export const createWeight = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/scales')

    dispatch({
      type: GET_WEIGHTS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: WEIGHT_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
}