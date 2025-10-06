import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterProvider'

export default function Counter() {
    const { count, increment } = useContext(CounterContext);
    console.log(count);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>++</button>
        </div>
    )
}
