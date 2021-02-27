import React from 'react'
import PropTypes from 'prop-types';

const Footer = ({ className }) => {
    return (
        <div className={className}>
            <p>netflixroulette</p>
        </div>            
    )
}

Footer.propTypes = {
    className: PropTypes.string.isRequired,
}

export  { Footer }
