import React, { useState, useTransition } from 'react'
import Body from './Body'
import { Greet } from 'components/learning/Greet'
import { Message } from 'components/learning/Message'
import { ClickHandler } from 'components/learning/ClickHandler'
import { GreetParentComponent } from 'components/learning/GreetParentComponent'
import List from 'components/learning/List'
import { Form } from 'components/learning/Form'
import { PostList } from 'components/learning/PostList'
import NAMES from 'components/learning/data.json'


function Layout() {
    const [isPending, startTransition] = useTransition()
    const [inputValue, setInputValue] = useState('')
    const [query, setQuery] = useState('')
    const changeHandler = (e) => {
        setInputValue(e.target.value);
        startTransition(() => setQuery(e.target.value))
    }
    const filterNames = NAMES.filter(item => {
        return item.first_name.includes(query) || item.last_name.includes(query)
    })
    return (
        <>
            <Body>
                {/* <Greet /> */}
                {/* <Message name={name} />*/}
                {/* <ClickHandler/> */}
                {/* <GreetParentComponent/> */}
                {/* <List/> */}
                {/* <Form/> */}
                {/* <PostList/> */}
                <input type="text" value={inputValue} onChange={changeHandler} />
                {isPending && <p>Updating List...</p>}
                {filterNames.map((item) => {
                    return (
                        <p key={item.id}>{item.first_name} {item.last_name}</p>
                    )
                })}
            </Body>
        </>
    )
}

export default Layout