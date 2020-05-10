import React, { Component } from 'react';

class Feeling extends Component {
    render() {
        return (
            <>
            <h3>How are you feeling today?</h3>
            <input type="number" max="5" min="0"></input>
            <button>Next</button>
            </>
        )
    }
}

export default Feeling;