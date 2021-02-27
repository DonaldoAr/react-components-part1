import React from 'react'
import { 
  TopNav,
  A,
  Active,
  Arrow,
  SortParagrapgh,
  DropDown,
  DropDownParagrapgh,
  DropDownContent,
  DropButton
} from './../styles'
import { NavOptions, ResultsSort } from './../__mocks__'

export const NavBar = () => {
    return (
      <TopNav>
        {
          NavOptions.map(option => {
            return (
              option.active 
              ? <Active key={option.id}>{option.name}</Active>
              : <A key={option.id}>{option.name}</A>
            )
          }) 
        }
        <DropDown>
          <DropButton>RELEASE DATE: <Arrow/></DropButton>
          <DropDownContent>
            {
              ResultsSort.map(option => <DropDownParagrapgh key={option.id}>{option.name}</DropDownParagrapgh>) 
            }
          </DropDownContent>
        </DropDown>
        <SortParagrapgh>SORT BY</SortParagrapgh>
      </TopNav>  
    )
}