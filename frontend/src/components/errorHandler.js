import React from 'react'

class ErrorHandler extends React.Component {
  render () {
    let result;
    console.log(this.props.error.response)
    if (this.props.error) {
      result = `Error: ${this.props.error.response.data}`
    }
    return <div id='error'>{result}</div>
  };
}

export default ErrorHandler
