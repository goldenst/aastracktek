import { GET_SAFTEY, SAFTEY_ERROR } from "../actions/types";

const initalState = {
  saftey: null,
  safteys: [],
  loading: true,
  error: {}
};

export default function(state = initalState, action) {
  const {type, payload} = action;

  switch(type) {
    case GET_SAFTEY:
      return {
        ...state,
        safteys:payload,
        loading: false
      }
    case SAFTEY_ERROR:
      return {
        ...state,
        err: payload,
        loading: false
      }
    default: 
      return state
  }
}