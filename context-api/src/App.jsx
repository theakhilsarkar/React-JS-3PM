import React from 'react'
import Counter from './components/Counter'
import "./App.css"
import Todo from './components/Todo'

export default function App() {
  return (
    <div>
      <Counter />
      <Todo />
    </div>
  )
}


// prop drilling -
// A -> B -> C
// component - state, props-readable,setState

// context
// common component - all states - store
// html --> react