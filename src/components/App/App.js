import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understaning';
import Supported from '../Supported/Supported'
import Comments from '../Comments/Comments'
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'

class App extends Component {
  state = {
    feedback: []
  }

  componentDidMount() {
    console.log('app mounted');
    this.getFeedback();
  }

  getFeedback = () => {
    console.log('get feedback');
    axios({
      method: 'GET',
      url:'/api/feedback'
    }).then(response => {
      console.log(response.data);
      this.setState({
        feedback: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Feeling></Feeling>
        <Understanding></Understanding>
        <Supported></Supported>
        <Comments></Comments>
        <ReviewFeedback></ReviewFeedback>
      </div>
    );
  }
}

export default App;
