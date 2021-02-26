import styled from 'styled-components';

export const Paragraph = styled.p`
  float: ${props => props.theme.float};
  margin-top:${props => props.theme.marginTop};
  margin-left: ${props => props.theme.marginLeft};
  color: ${props => props.theme.color};
`;

Paragraph.defaultProps = {
  theme: {
    float: 'left',
    marginTop: '5px',
    marginLeft: '40px',
    color: '#F65261'
  }
}

export const ParagraphTitle = {
    color: '#FFFFFF',
    marginLeft: '6%',
    marginTop: '50px'
};