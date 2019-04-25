import styled from 'styled-components';

export const Button = styled.button`
    color: ${props => (props.count>=0? 'black': 'red')};
`;
