import React,{useEffect, useRef} from 'react'

function useRefHook() {

    const inputRef = useRef(null)
    useEffect(()=> {
        //to focus the input element
        inputRef.current.focus()
    }, [])
    
    return (
        <div>
            <input type="text" ref={inputRef} />        
        </div>
    )
}

export default useRefHook
