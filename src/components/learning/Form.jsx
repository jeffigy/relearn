import React, { useState } from 'react'

export const Form = () => {
    const [firstName, setFirstName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`first name is ${firstName}`)
    }
    return (
        <form
            onSubmit={handleSubmit}
        >
            <div>
                <label htmlFor="">first name</label>
                <input type="text" value={firstName} onChange={(event) => { setFirstName(event.target.value) }} />
            </div>
            <button type='submit'>submit</button>
        </form>
    )
}
