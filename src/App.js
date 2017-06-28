import React, { Component } from 'react';
import logo from './logo.svg';
import FirstFourSteps from './components/firstFourSteps';
import {Router, Route, Switch} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <FirstFourSteps/>
      </div>
    );
  }
}

export default App;
