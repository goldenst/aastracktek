import { combineReducers } from "redux";
import alert from './alert'
import auth from './auth'
import saftey from './saftey'
import cars from './cars'
import weights from './weights'


export default combineReducers({
  alert,
  auth,
  saftey,
  cars,
  weights
});
