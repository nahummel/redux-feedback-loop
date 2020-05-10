import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understaning';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {

  componentDidMount() {
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
        <Router>
          <Route exact path= '/' render={(props) => <Feeling {...props} dispatch={this.props.dispatch}/>}/>
          <Route path= '/understanding' render={(props) => <Understanding {...props} dispatch={this.props.dispatch}/>}/>
          <Route path= '/support' render={(props) => <Supported {...props} dispatch={this.props.dispatch}/>}/>
          <Route path= '/comments' render={(props) => <Comments {...props} dispatch={this.props.dispatch}/>}/>
          <Route path= '/review' render={(props) => <ReviewFeedback {...props} feedback={this.props.reduxState}/>}/>
          <Route path= '/thankyou' render={(props) => <ThankYou {...props} dispatch={this.props.dispatch}/>}/>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});

export default connect(putReduxStateOnProps)(App);
