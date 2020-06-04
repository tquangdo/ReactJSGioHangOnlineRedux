import React from 'react'
import Message from '../components/Message'
import PropTypes from 'prop-types'
//Redux
import { connect } from 'react-redux'

class ContaMsg extends React.Component {
  render() {
    const { reduxprop_msg } = this.props
    return (
      <Message reduxprop_msg={reduxprop_msg} >
      </Message>
    )
  }
}
ContaMsg.propTypes = {
  reduxprop_msg: PropTypes.string
}

export default connect((state) => {
  return {
    reduxprop_msg: state.reducerMsg
  }
})(ContaMsg)
