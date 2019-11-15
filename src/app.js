import React from 'react'
import Greeting from './greeting'

export default () => {
    return (
        <div>
            <Greeting name={42} />
            <Greeting name="Mark" job="engineer" />
            <Greeting name="Mia" />
        </div>
    )
    //return <h1>Welcome to react JS</h1>
} 