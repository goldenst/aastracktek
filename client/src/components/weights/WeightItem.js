import React, { Fragment, Component } from "react";
import { link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class WeightItem extends Component {

  createListitem() {
      return this.props.weights.map((weight) => {
        return (
          <li key={weight._id}>{weight.carNum} {weight.division}</li>
        )
      })
  }

  render () {
    return (
      <div className="card bg-light">
      
      <ul>
        <li>
        {this.createListitem}
        
        </li>
        
      </ul>
      <p></p>
    </div>
    )
  }
}


WeightItem.propTypes = {
  weight: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  weights: state.weights
});

export default connect(mapStateToProps, {})(WeightItem);
