import React,{useState} from 'react'
import useCount from '../hooks/useCount'

function CounterTwo() {
    const [count, increment, decrement, reset] = useCount(10,5)
    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo
