import React from 'react'

//this generates results from scanner

class Result extends React.Component {
    propTypes: {
        result: React.PropTypes.object
    }

    render() {
        const result = this.props.result;

        if (!result) {
            return null;
        }
        return (
            <li>
            {result.codeResult.code} [{result.codeResult.format}]
            </li>
        )
    }
})

export default Result
