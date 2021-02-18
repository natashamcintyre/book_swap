import React from 'react'

class ErrorHandler extends React.Component {
  render () {
    let result;
    // console.log(this.props.error)
    if (this.props.error) {
      result = `Error: error text from json mock`
    }
    return <div id='error'>{result}</div>
  };
}

export default ErrorHandler
