import {
  GET_WEIGHTS,
  WEIGHT_ERROR
} from '../actions/types'

const initalState = {
  weights: [],
  weight: null,
  loading: true,
  error: {}
}

export default function(state = initalState, action) {
  const {type, payload} = action

  switch(type) {
    case GET_WEIGHTS:
      return {
        ...state,
        weights: payload,
        loading: false
      }
    case WEIGHT_ERROR:
      return {
          ...state,
          error: payload,
          loading: false
      }
    default:
      return state
    }
}