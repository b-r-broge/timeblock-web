import React, { Component } from 'react';
import './styles/App.css';
import TimeBlock from './components/TimeBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeBlock />
      </div>
    );
  }
}

export default App;
