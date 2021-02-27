import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    margin: 10px;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    max-width: 30%;
`
export const CardImg = styled.img`
    max-width: 100%;
    max-height: 50vh;
`

export const CardText = styled.div`
    padding: 0 20px 20px;
    color: #555555;
`

export const ReleaseDate = styled.span`
    float: right;
    padding-right: 10px;
    padding-left: 10px;
    border: solid #555555;
    border-width: thin;
`
