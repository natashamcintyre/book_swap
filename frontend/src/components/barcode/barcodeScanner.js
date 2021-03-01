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
        <button className='scanbox' onClick={this._scan} >
          <i className='fas fa-barcode' id='barcodeIcon'></i>
          {this.state.scanning ? ' Stop Scan' : ' Go on. Scan it'}

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
