import React from 'react';
import Scanner from './scanner';
import Result from './result';

// this stores scanning state and results
class BarcodeScanner extends React.Component {
    getInitialState() {
        return {
            scanning: false,
            results: []
        }
    }

    render() {
        return (
            <div>
                <button onClick={this._scan}>{this.state.scanning ? 'Stop' : 'Start'}</button>
                <ul className="results">
                    {this.state.results.map((result) => (<Result key={result.codeResult.code} result={result} />))}
                </ul>
                {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
            </div>
        );
    },

    _scan() {
        this.setState({scanning: !this.state.scanning});
    },

    _onDetected(result) {
        this.setState({results: this.state.results.concat([result])});
    }
})

export default BarcodeScanner
