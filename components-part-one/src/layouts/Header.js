import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { 
    ParagraphTitle,
    Paragraph,
    ButtonSearch,
    Button,
    Input
} from './../styles'
import PropTypes from 'prop-types';

const Header = ({ className }) => {

    /// Uncomment useEffect block to check ErrorBoundary functionality
    // useEffect(() => {
    //     throw new Error('This is an ERROR!!!')
    // }, [])

    return (
        <div className={className}>
                <Paragraph>netflixroulette</Paragraph>
                <Button>+ ADD MOVIE</Button>
                <ThemeProvider theme={ParagraphTitle}>
                    <Paragraph>FIND YOUR MOVIE</Paragraph>
                </ThemeProvider>
                <Input placeholder="What do you want to watch?"/>
                <ButtonSearch>SEARCH</ButtonSearch>
        </div>
    )
}

Header.propTypes = {
    className: PropTypes.string.isRequired,
}

export  { Header }
