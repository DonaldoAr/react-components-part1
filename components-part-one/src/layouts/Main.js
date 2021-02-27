import React from 'react'
import { NavBar, CardGallery } from './../components'
import { MovieCounterStyles } from './../styles'
import PropTypes from 'prop-types';

const Main = ({ className }) => {
    return (
        <div className={className}>
            <NavBar/>
            <MovieCounterStyles counter={6} />
            <CardGallery/>
        </div>
    )
}

Main.propTypes = {
    className: PropTypes.string.isRequired,
}

export  { Main }