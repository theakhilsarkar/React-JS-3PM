import { createContext, useState } from 'react'

export const CounterContext = createContext();

export default function CounterProvider({ children }) {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const increment = () => {
        setCount(count + 1);
    }
    return <CounterContext.Provider value={{ count, increment, todos }}>
        {children}
    </CounterContext.Provider>
}


// 1. create context folder -> CounterProvider.jsx
// 2. import createContext from react
// 3. store refference of context in CounterContext which is return
//    by createContext() hook and export it.
// 4. create a component with name CounterProvider and declare needed state and define logic.
// 5. return CounterContext.Provider with children prop
// 6. also pass all state and methods by value prop
// 7. wrap whole app into CounterProvider
// 8. use state by useContext hook in any components

// array - crud