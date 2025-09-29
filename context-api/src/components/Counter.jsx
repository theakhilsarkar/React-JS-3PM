import { useContext } from 'react'
import { CounterContext } from '../context/CounterProvider'

export default function Counter() {
    const { count, setCount } = useContext(CounterContext);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>++</button>
        </div>
    )
}

// --, *, 2x
