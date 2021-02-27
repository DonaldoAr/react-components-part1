import styled from 'styled-components'

export const TopNav = styled.div`
    overflow: hidden;
`

export const A = styled.a`
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
        border-bottom: 3px solid #F65261;
    }
`

export const Active = styled.a`
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        &:hover {
            border-bottom: 3px solid #F65261;
        }
        border-bottom: 3px solid #F65261;
`

export const Arrow = styled.i`
        margin-left: 10px;
        margin-bottom: 3px;  
        border: solid #F65261;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 4px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
`

export const DropDownParagrapgh = styled.p`
        color: #FFFFFF;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        &:hover {
            background-color: #F65261;
            cursor: pointer;
            display: block;
        }
`
export const SortParagrapgh = styled.p`
        float: right;
        color: #555555;
        margin-right: 30px;
`

export const DropDownContent = styled.div`
        display: none;
        right: 0;
        background-color: #555555;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        &:hover {
            background-color: #F65261;
            cursor: pointer;
            display: block;
        }
`
export const DropDown = styled.div`
        float: right;
        &:hover ${DropDownContent} {
            display: block;
            background-color: #555555;
        }
`
export const DropButton = styled.button`
        background-color: #232323;
        color: #FFFFFF;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #555555;
        }
`