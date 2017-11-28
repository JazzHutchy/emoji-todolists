import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <br />

        <div className="App">
          <TodoItem description='First' completed={true} />
          <TodoItem description='Second' completed />
          <TodoItem description='Third' />
        </div>
      </div>
    );
  }
}

export default App;
