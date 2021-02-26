import styled from 'styled-components';

export const Button = styled.button`
  float: ${props => props.theme.float};
  margin-top: ${props => props.theme.marginTop};
  margin-right: ${props => props.theme.marginRight};
  height: ${props => props.theme.height};
  width: ${props => props.theme.width};
  border: ${props => props.theme.border};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor}; 
`;

Button.defaultProps = {
  theme: {
    float: 'right',
    marginTop: '5px',
    marginRight: '40px',
    height: '5vh',
    width: '20%',
    backgroundColor: '#555555',
    border: 'none',
    color: "#F65261"
  }
}

export const ButtonSearch = styled.button`
  margin-right: ${props => props.theme.marginRight};
  margin-left: ${props => props.theme.marginLeft};
  height: ${props => props.theme.height};
  width: ${props => props.theme.width};
  border: ${props => props.theme.border};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor}; 
`;

ButtonSearch.defaultProps = {
  theme: {
    marginRight: '20px',
    marginLeft: '7px',
    height: '6vh',
    width: '20%',
    backgroundColor: '#F65261',
    border: 'none',
    color: "#FFFFFF"
  }
}