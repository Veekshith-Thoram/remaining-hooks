import React,{useEffect, useRef} from 'react'

function useRefHook() {

    const inputRef = useRef(null)

    useEffect(()=> {
        //to focus the input element
        inputRef.current.focus()
    }, [])
    
    return (
        <div>
            <input ref={inputRef} type="text" />        
        </div>
    )
}

export default useRefHook
