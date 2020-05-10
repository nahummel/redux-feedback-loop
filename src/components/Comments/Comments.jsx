import React, { Component } from 'react';

class Comments extends Component {
    state = {
        comment: '',
    }

    clickHandler = () => {
        console.log('in clickHandler')
        console.log(this.state)
        this.props.dispatch({ type: 'comment', payload: this.state.comment });
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
                <h3>Any comments you want to leave?</h3>
                <input type="text" placeholder="Comments" onChange={(event) => this.handleChange(event, 'comment')}></input>
                <button onClick={this.clickHandler}>Next</button>
            </>
        )
    }
}

export default Comments;