import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layouts/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import Saftey from "./components/saftey/Saftey";
import Cars from "./components/cars/Cars";
import CreateCar from "./components/cars/CreateCar";
import EditCars from "./components/cars/EditCars";
import Weights from './components/weights/Weights'
import WeightForm from './components/weights/WeightForm'

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/saftey" component={Saftey} />
              <PrivateRoute exact path="/cars" component={Cars} />
              <PrivateRoute exact path="/createcar" component={CreateCar} />
              <PrivateRoute exact path="/editcar" component={EditCars} />
              <PrivateRoute exact path="/weight" component={Weights} />
              <PrivateRoute exact path="/weightform" component={WeightForm} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
