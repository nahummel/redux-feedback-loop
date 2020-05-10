import React, {Component} from 'react';

class ReviewFeedback extends Component{
    render(){
        return(
            <>
            <h1>Review Your Feedback</h1>
            <h3>Feelings: {this.props.feedback[0]}</h3>
            <h3>Understaning: {this.props.feedback[1]}</h3>
            <h3>Support: {this.props.feedback[2]}</h3>
            <h3>Comments: {this.props.feedback[3]}</h3>
            <button>Submit</button>
            </>
        )
    }
}

export default ReviewFeedback;