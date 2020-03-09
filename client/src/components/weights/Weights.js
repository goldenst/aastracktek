import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getWeights } from "../../actions/weights";
import WeightItem from "./WeightItem";
import Spinner from "../../components/layouts/Spinner";

const Weights = ({ getWeights, weights: { weights, loading } }) => {
  useEffect(() => {
    getWeights();
  }, [getWeights]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Todays Scale Slips</h1>
      {/* Weight form */}
      <div className="posts">
        
          <WeightItem key={weights._id} weight={weights} />
        
      </div>
    </Fragment>
  );
};

Weights.propTypes = {
  getWeights: PropTypes.func.isRequired,
  weights: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weights: state.weights,
  weight: state.weight
});

export default connect(mapStateToProps, { getWeights })(Weights);
