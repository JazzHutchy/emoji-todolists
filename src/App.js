import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

const items = [
  { description: 'First', completed: true },
  { description: 'Second', completed: true },
  { description: 'Third', completed: false },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <br />

        <div className="App2">
          {
            items.map((item, index) => (
              <TodoItem
                key={index}
                description={item.description}
                completed={item.completed}
              />
            ))
          }
          <TodoItem description='First' completed />
          <TodoItem description='Second' completed />
          <TodoItem description='Third' />
        </div>
      </div>
    );
  }
}

export default App;
