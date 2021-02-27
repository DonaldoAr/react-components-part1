import React from 'react'
import PropTypes from 'prop-types';

const MoviesCounter = ({ className, counter }) => {
    return (
        <div className={className}>
            {counter} movies found
        </div>
    )
}

MoviesCounter.propTypes = {
    className: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
}

MoviesCounter.defaultProps = {
    counter: 0,
};

export  { MoviesCounter }