import React from 'react'

function TodoItem({
  description,
  completed = false, // If not passed, default to 'false'
  onToggleCompleted
}) {
  return (
    <label>
      <input
        type='checkbox'
        checked={completed}
        onChange={
          (event) => { // Event Listener
            console.log('Clicked checkbox', description)
            // When user clicks checkbox
            // Notify the powers above that the concept of completed has changed
            onToggleCompleted()
          }
        }
      />
      {description}
    </label>
  )
}

export default TodoItem