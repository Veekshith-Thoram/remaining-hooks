import React,{useState, useMemo} from 'react'

function TwoCounters() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementCountOne = () => {
        setCountOne(countOne + 1)
    }

    const incrementCountTwo = () => {
        setCountTwo(countTwo + 1)
    }
    
    const isEven = useMemo(() => {
        var i = 0
        while(i<200000000) i++ 
        return countOne%2 === 0
    }, [countOne])
    return (
        <div>
            <div>
                <button onClick={incrementCountOne}>Count1 - {countOne}</button>
                <span>{isEven ? "Even" : "Odd"}</span>
            </div>
            <div>
                <button onClick={incrementCountTwo}>Count2 - {countTwo}</button>
            </div>
        </div>
    )
}

export default TwoCounters
