import React from 'react'
import PropTypes from 'prop-types'

class ErrorHandler extends React.Component {
  render () {
    let result
    console.log(this.props.error)
    if (this.props.error) {
      result = `Error: ${this.props.error.response.data}`
    }
    return <div id='error'>{result}</div>
  }
}

ErrorHandler.propTypes = {
  error: PropTypes.error
}

export default ErrorHandler
