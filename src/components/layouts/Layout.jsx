import React from 'react'
import Body from './Body'
import { Greet } from 'components/learning/Greet'
import { Message } from 'components/learning/Message'
function Layout() {
    const name = 'Doe'
    return (
        <>
            <Body>
                {/* <Greet /> */}
                <Message name={name} />
            </Body>
        </>
    )
}

export default Layout