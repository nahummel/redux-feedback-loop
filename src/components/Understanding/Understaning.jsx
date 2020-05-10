import React, { Component } from 'react';

class Understanding extends Component {
    state = {
        understanding: '',
    }

    clickHandler = () => {
        console.log('in clickHandler')
        console.log(this.state)
        if (this.state.understanding === '') {
            alert('Please insert feedback!')
        } else {
            this.props.dispatch({ type: 'understanding', payload: this.state.understanding });
            this.props.history.push('/support');
        }
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
                <h3>How well are you understanding the content?</h3>
                <input type="number" max="5" min="0" onChange={(event) => this.handleChange(event, 'understanding')}></input>
                <button onClick={this.clickHandler}>Next</button>
            </>
        )
    }
}

export default Understanding;