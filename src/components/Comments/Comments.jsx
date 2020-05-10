import React, { Component } from 'react';

class Comments extends Component {
    render() {
        return (
            <>
                <h3>Any comments you want to leave?</h3>
                <input type="text" placeholder="Comments"></input>
                <button>Next</button>
            </>
        )
    }
}

export default Comments;