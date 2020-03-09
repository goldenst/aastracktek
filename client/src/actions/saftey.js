import axios from 'axios'
import {setAlert} from './alert'

import {
  GET_SAFTEY,
  SAFTEY_ERROR
} from './types'

// Get all Saftey sheets
export const getSafteys = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/saftey')

    dispatch({
      type: GET_SAFTEY,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: SAFTEY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status}
    })
  }
}