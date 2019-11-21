import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from "redux-logger"

import rootReducer from './reducers'

import './index.css';
import App from './App';
 

ReactDOM.render(<App />, document.getElementById('root'));

 
