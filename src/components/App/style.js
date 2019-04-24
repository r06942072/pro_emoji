import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 2em;
    #background: papayawhip;
    background: ${props => (props.isLoading? 'pink': 'papayawhip')};
    color: blue;
`;

export const Button = styled.button`
    color: ${props => (props.count>=0? 'black': 'red')};
`;
