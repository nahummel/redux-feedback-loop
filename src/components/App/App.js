import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

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
    this.getFeedback();
    console.log(this.props.reduxState)
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
        <Feeling dispatch={this.props.dispatch}/>
        <Understanding dispatch={this.props.dispatch}/>
        <Supported dispatch={this.props.dispatch}></Supported>
        <Comments dispatch={this.props.dispatch}></Comments>
        <ReviewFeedback feedback={this.props.reduxState} dispatch={this.props.dispatch}></ReviewFeedback>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});

export default connect(putReduxStateOnProps)(App);
