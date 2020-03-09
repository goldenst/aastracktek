import { GET_CARS, CAR_ERROR } from "../actions/types";

const initalState = {
  car: null,
  cars: [],
  loading: true,
  error: {}
};

export default function(state = initalState, action) {
  const {type, payload} = action;

  switch(type) {
    case GET_CARS:
      return {
        ...state,
        cars:payload,
        loading: false
      }
    case CAR_ERROR:
      return {
        ...state,
        err: payload,
        loading: false
      }
    default: 
      return state
  }
}