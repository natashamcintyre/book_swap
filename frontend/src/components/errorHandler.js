import React from 'react'
import PropTypes from 'prop-types'

class ErrorHandler extends React.Component {
  render () {
    let result
    if (this.props.error) {
      result = `Error: ${this.props.error.response.data}`
    }
    return <div id='error'>{result}</div>
  };
}

ErrorHandler.propTypes = {
  error: PropTypes.object
}

export default ErrorHandler
