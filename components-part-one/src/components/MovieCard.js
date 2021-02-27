import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    ReleaseDate
} from '../styles'
import PropTypes from 'prop-types';

const MovieCard = ({ img, title, genre, releaseDate, imgAlt }) => {
    return (
        <Card>
            <CardImg src={img} alt={imgAlt}/>
            <CardText>
                <h3>{title}<ReleaseDate>{releaseDate}</ReleaseDate></h3>
                <p>{genre}</p>
            </CardText>
        </Card>
    )
}

MovieCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
}

MovieCard.defaultProps = {
    img: 'https://unsplash.it/800/600?image=11',
    title: 'NO TITLE',
    genre: 'NO GENRE',
    releaseDate: '0',
    imgAlt: 'NO IMAGE',
};

export  { MovieCard }