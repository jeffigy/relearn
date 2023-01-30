import React, { useState } from 'react'

export const Message = (props) => {
    const [subscribe, setSubscribe] = useState(false)
    return (
        <div>

            <p>Welcome Visitor {props.name}</p>
            <p>{subscribe.toString()}</p>
            <button onClick={() => setSubscribe('true')}>
                {subscribe === true ? 'Subscribed' : 'Subscribe'}
            </button>
        </div>
    )
}
