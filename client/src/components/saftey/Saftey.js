import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getSafteys} from '../../actions/saftey'

const Saftey = ({ getSafteys, auth, saftey }) => {
useEffect(() => {
  getSafteys()
}, [])

  return (
    <div>
      <h5>Saftey Sheets</h5>
    </div>
  )
}

Saftey.propTypes = {
  getSafteys: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  saftey: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  saftey: state.saftey
})

export default connect(mapStateToProps, {getSafteys})(Saftey)
