import React from 'react'

export const ClickHandler = () => {
    const clickHandler = () => {
        console.log('Button was clicked');
    }
    return (
        <button onClick={clickHandler}>
            Click
        </button>
    )
}
