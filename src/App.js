import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'


// UI (view)
class App extends Component {
  // Data (model)
  state = {
    items: [
      { description: 'First', completed: true },
      { description: 'Second', completed: true },
      { description: 'Third', completed: false },
      { description: 'Fourth', completed: true },
    ]
  }

  onToggleItemAtIndex = (index) => {
    // Change our app's state
    this.setState((prevState) => {
      // Get current items
      const beforeItems = prevState.items

      const afterItems = beforeItems.map((item, currentIndex) => {
        // When we have found the index of the item to change
        if (currentIndex === index) {
          return {
            ...item, // Copy key-value pairs from existing item
            completed: !item.completed // Override the `completed` to be the opposite of before
          }
        }
        // No changes to make to this particular item
        else {
          return item
        }
      })
      // // Find the item with the particular `index`
      // const item = afterItems[index]
      // // Toggle completed: f -> t, t -> f
      // item.completed = !item.completed

      // // Return the changes we have
      return {
        items: afterItems
      }
    })
  }

  render() {
    const items = this.state.items

    const total = items.length

    let totalCompleted = 0
    let totalIncomplete = 0

    items.forEach((item) => {
      if (item.completed) {
        totalCompleted += 1
      }
      else {
        totalIncomplete += 1
      }
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <br />

        <div className="App2">
          <dl>
            <dt>Total</dt>
            <dd>{total}</dd>

            <dt>Total Completed</dt>
            <dd>{totalCompleted}</dd>

            <dt>Total Incomplete</dt>
            <dd>{totalIncomplete}</dd>
          </dl>
          {
            items.map((item, index) => (
              <TodoItem
                key={index}
                description={item.description}
                completed={item.completed}
                onToggleCompleted={
                  () => {
                    console.log('TodoItem onToggleCompleted received', index)
                    this.onToggleItemAtIndex(index)
                  }
                }
              />
            ))
          }
        </div>
      </div>
    );
  }
}


export default App;
