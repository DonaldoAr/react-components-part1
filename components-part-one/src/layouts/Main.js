import React from 'react'
import { NavBar } from './../components'
import { MovieCounterStyles } from './../styles'

export const Main = ({ className }) => {
    return (
        <div className={className}>
            <NavBar/>
            <MovieCounterStyles counter={5} />
        </div>
    )
}