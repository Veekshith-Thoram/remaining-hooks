import React,{useState} from 'react'
import useInput from '../hooks/useInput';

function UserForm() {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [firstName, bindFirstName, resetFirstName] = useInput("")
    const [lastName, bindLastName, resetLastName] = useInput("")
    const submitHandler = (e) => {
        e.preventDefault()
        alert(`You are ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label for="firstName">FirstName</label>
                <input type="text" name="lastName" {...bindFirstName}/>
                <label for="lastName">LastName</label>
                <input name="lastName" type="text" {...bindLastName}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default UserForm
