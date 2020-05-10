import React, { Component } from 'react';

class Understanding extends Component {
    render() {
        return (
            <>
                <h3>How well are you understanding the content?</h3>
                <input type="number" max="5" min="0"></input>
                <button>Next</button>
            </>
        )
    }
}

export default Understanding;