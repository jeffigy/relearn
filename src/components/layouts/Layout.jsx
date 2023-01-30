import React from 'react'
import Body from './Body'
import { Greet } from 'components/learning/Greet'
import { Message } from 'components/learning/Message'
import { ClickHandler } from 'components/learning/ClickHandler'
import { GreetParentComponent } from 'components/learning/GreetParentComponent'
import List from 'components/learning/List'
import { Form } from 'components/learning/Form'
import { PostList } from 'components/learning/PostList'
function Layout() {
    const name = 'Doe'
    return (
        <>
            <Body>
                {/* <Greet /> */}
                {/* <Message name={name} />
                 */}
                 {/* <ClickHandler/> */}
                 {/* <GreetParentComponent/> */}
                 {/* <List/> */}
                 {/* <Form/> */}
                 <PostList/>
            </Body>
        </>
    )
}

export default Layout