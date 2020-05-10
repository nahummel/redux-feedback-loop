import React, { Component } from 'react';

class ThankYou extends Component {

    clickHandler = (event, property) => {
        if (property === 'RESET') {
            this.props.dispatch({ type: 'RESET' });
        }
        this.props.history.push('/');
    }

    render() {
        return(
            <>
                <h1>Thank You!</h1>
                <button onClick={(event) => this.clickHandler(event, 'RESET')}>Leave New Feedback</button>
            </>
        )
    }
}

export default ThankYou;