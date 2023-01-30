import React from 'react'
import Body from './Body'
import { Greet } from 'components/learning/Greet'
import { Message } from 'components/learning/Message'
import { ClickHandler } from 'components/learning/ClickHandler'
import { GreetParentComponent } from 'components/learning/GreetParentComponent'
function Layout() {
    const name = 'Doe'
    return (
        <>
            <Body>
                {/* <Greet /> */}
                {/* <Message name={name} />
                 */}
                 {/* <ClickHandler/> */}
                 <GreetParentComponent/>
            </Body>
        </>
    )
}

export default Layout