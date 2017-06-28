import React, { Component } from 'react';
import FirstFourSteps from './components/firstFourSteps';
import StepFive from './components/stepFive';
import {Router, Route, Switch} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <FirstFourSteps/>
        <StepFive/>
      </div>
    );
  }
}

export default App;
