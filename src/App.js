import React, { Component } from 'react';
import FirstFourSteps from './components/firstFourSteps';
import StepFive from './components/stepFive';
import {Router, Route, Switch} from 'react-router';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div>
        <FirstFourSteps/>
        <StepFive/>
      </div>
    </Provider>
    );
  }
}

export default App;
