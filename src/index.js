import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//Initial State
const firstReducerInitialState = {};

const firstReducer = (state = firstReducerInitialState, action) => {
    console.log('in firstReducer: Action:', action);
    return state;
}

const storeInstance = createStore(firstReducer);

ReactDOM.render(
    <Provider store = {storeInstance}><App /></Provider>,
    document.getElementById('root')
)
registerServiceWorker();
