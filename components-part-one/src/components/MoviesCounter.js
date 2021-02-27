import React from 'react'

export const MoviesCounter = ({ className, counter }) => {
    return (
        <div className={className}>
            {counter} movies found
        </div>
    )
}