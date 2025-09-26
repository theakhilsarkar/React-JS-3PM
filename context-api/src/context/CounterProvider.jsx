import React, { createContext, useState } from 'react'

//1. create context by createContext hook from react library
export const CounterContext = createContext();

export default function CounterProvider({ children }) {

    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    )
}
