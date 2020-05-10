import React, {Component} from 'react';
import axios from 'axios';

class ReviewFeedback extends Component {
    state = {
        feeling: '',
        understanding: '',
        support: '',
        comments: ''
    }

    addFeedback = () => {
        axios({
            url: '/api/feedback',
            method: 'POST',
            data: this.state
        }).then(response =>{
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    clickHandler = () => {
        console.log('in clickHandler')
        const updatedState = {
            feeling: Number(this.props.feedback[0]),
            understanding: Number(this.props.feedback[1]),
            support: Number(this.props.feedback[2]),
            comments: this.props.feedback[3]
        }
        this.setState(updatedState, this.addFeedback)
    }

    render(){
        return(
            <>
            <h1>Review Your Feedback</h1>
            <h3>Feelings: {this.props.feedback[0]}</h3>
            <h3>Understaning: {this.props.feedback[1]}</h3>
            <h3>Support: {this.props.feedback[2]}</h3>
            <h3>Comments: {this.props.feedback[3]}</h3>
            <button onClick={this.clickHandler}>Submit</button>
            </>
        )
    }
}

export default ReviewFeedback;