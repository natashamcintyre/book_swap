import React, { Component } from 'react'
import Scanner from './scanner'
import PropTypes from 'prop-types'

class BarcodeScanner extends Component {
  state = {
    scanning: false,
    result: ''
  }

  _scan = () => {
    this.setState({ scanning: !this.state.scanning })
  }

  _onDetected = result => {
    this.props.changeIsbnValue(result.codeResult.code)
    this._scan()
  }

  render () {
    return (
      <div>
        <button onClick={this._scan}>
          {this.state.scanning ? 'Stop' : 'Start'}
        </button>
        {this.state.scanning ? <Scanner onDetected={this._onDetected} /> : null}
      </div>
    )
  }
}

BarcodeScanner.propTypes = {
  changeIsbnValue: PropTypes.func
}

export default BarcodeScanner
