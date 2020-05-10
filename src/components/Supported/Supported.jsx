import React, { Component } from 'react';

class Supported extends Component {
    render() {
        return (
            <>
                <h3>How well are you being supported?</h3>
                <input type="number" max="5" min="0"></input>
                <button>Next</button>
            </>
        )
    }
}

export default Supported;