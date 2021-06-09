import {useState} from 'react'

function useCount(initialState = 0, value) {
    const [count, setCount] = useState(initialState);
    const increment = () => {
        setCount(prevState => prevState+value)
    }
    const decrement = () => {
        setCount(prevState => prevState-value)
    }
    const reset = () => {
        setCount(initialState)
    }
    return [count, increment, decrement, reset]
}

export default useCount
