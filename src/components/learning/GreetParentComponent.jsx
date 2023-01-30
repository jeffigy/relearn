import React from 'react'
import { ChildComponent } from './ChildComponent'

export const GreetParentComponent = () => {
    const greetParent = (childName) => {
        alert(`Hello parent ${childName}`)
    }
  return <ChildComponent greetHandler={greetParent}/>
}
