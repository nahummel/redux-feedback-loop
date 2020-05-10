import React, { Component } from 'react';

class Feeling extends Component {
    state = {
        feeling: '',
    }

    clickHandler = () => {
        console.log('in clickHandler')
        console.log(this.state)
        if(this.state.feeling === '') {
            alert('Please insert feedback!')
        } else {
            this.props.dispatch({ type: 'feeling', payload: this.state.feeling });
            this.props.history.push('/understanding');
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
            <h3>How are you feeling today?</h3>
            <input type="number" max="5" min="0" onChange={(event) => this.handleChange(event, 'feeling')}></input>
            <button onClick={this.clickHandler}>Next</button>
            </>
        )
    }
}

export default Feeling;