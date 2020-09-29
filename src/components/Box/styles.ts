import styled from 'styled-components';

export const Container = styled.div`
    height: 20rem;
    width:  20rem;
    margin-top: 7rem;
    margin-left: 32rem;
    background: ${props => props.theme.colors.primary};
    color: #FFF;
    border-radius: 10px;
    box-shadow: 10px 5px 5px black;
    display: flex;
    justify-content: center;
    align-items: center;
`;
