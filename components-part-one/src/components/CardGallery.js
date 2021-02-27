import React from 'react'
import { CardsContainer } from './../styles'
import { MovieCard } from './MovieCard'
import { MovieGallery } from './../__mocks__'

export const CardGallery = () => {
    return (
            <CardsContainer>
                {
                    MovieGallery.map(movie => {
                        return (
                            <MovieCard
                            key={movie.id}
                            id={movie.id}
                            img={movie.img}
                            title={movie.title}
                            genre={movie.genre}
                            releaseDate={movie.releaseDate}
                            imgAlt={movie.imgAlt}
                            />
                        )
                    })
                }
            </CardsContainer>
    )
}