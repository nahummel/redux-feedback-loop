import React, { Component } from 'react';

class Supported extends Component {
    state = {
        support: '',
    }

    clickHandler = () => {
        console.log('in clickHandler')
        console.log(this.state)
        this.props.dispatch({ type: 'support', payload: this.state.support });
    }

    handleChange = (event, property) => {
        console.log(`in handleChange ${property}, ${event.target.value}`)

        this.setState({
            [property]: event.target.value
        })
    }

    render() {
        return (
            <>
                <h3>How well are you being supported?</h3>
                <input type="number" max="5" min="0" onChange={(event) => this.handleChange(event, 'support')}></input>
                <button onClick={this.clickHandler}>Next</button>
            </>
        )
    }
}

export default Supported;