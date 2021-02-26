import styled from 'styled-components';

export const Input = styled.input`
  padding-left: ${props => props.theme.paddingLeft};
  margin-left:${props => props.theme.marginLeft};
  height: ${props => props.theme.height};
  width: ${props => props.theme.width};
  background-color: ${props => props.theme.backgroundColor}; 
`;

Input.defaultProps = {
  theme: {
    paddingLeft: '1%',
    marginLeft: '6%',
    height: '5vh' ,
    width: '60%',
    backgroundColor: '#232323'
  }
}

export const OtherInput = {
    paddingLeft: '1%',
    marginLeft: '6%',
    height: '5vh' ,
    width: '60%',
    backgroundColor: '#232323'
};