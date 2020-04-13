import React from 'react';
import { connect } from "react-redux"
import { fetchKanyeQuote } from './actions'

import './App.css';

function App(props) {
  return (
    <div className="App">
      <button onClick={() => { props.fetchKanyeQuote() }}>share swagger</button>
      {props.error && <div>{props.error}</div>}
      {
        (props.isLoading) ?
          (<div>....loading swagggguh</div>) :
            (<><div>the swaggggguh:{props.quote}</div></>)
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading, error: state.error, quote: state.quote,
  }
}
export default connect(mapStateToProps, { fetchKanyeQuote })(App);
