import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    states: ['Utah', 'Idaho', 'Texas', 'NY', 'CT']
  }


  render() {
    let statesToDisplay = this.state.states.map( (element, index) => {
      return (
      <h2 key={ index }> { element }</h2>
      )
    })
    return (
      <div className="App">
        { statesToDisplay }
      </div>
    );
  }
}

export default App;
