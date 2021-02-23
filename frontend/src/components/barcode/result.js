import React, { Component } from 'react'

class Result extends Component {
  render() {
    const result = this.props.result

    if (!result) {
      return null
    }

    return (
      // put the isbn (result.codeResult.code) into the isbn search field
      <li>
        {' '}
        {result.codeResult.code}
      </li>
    )
  }
}

export default Result
