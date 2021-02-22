import React from 'react'

class Printer extends React.Component {
    render () {
        return (
            <div>
                <p>The book you have selected is:</p>
                <p>Title: {this.props.title}</p>
                <p>Author: {this.props.author}</p>
            </div>
        )
    }
}
export default Printer