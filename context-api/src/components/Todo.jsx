// low - useState
// mid - context
// high - redux toolkit

import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterProvider'

export default function Todo() {
    const { todos, addTodo, removeTodo } = useContext(CounterContext);
    return (
        <div>
            <div><input type="text" /><button>Add</button></div>
            {
                todos.map((todo, index) => <div key={index}>
                    {
                        todo.title
                    }
                    <button onClick={() => removeTodo(todo.id)}>-</button>
                </div>)
            }
        </div>
    )
}

// create a react app to perform crud operation by using context.