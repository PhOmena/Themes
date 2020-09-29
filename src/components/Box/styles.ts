import styled from 'styled-components';

export const Container = styled.div`
    height: 500px;
    width:  800px;
    margin-top: 70px;
    margin-left: 360px;
    background: ${props => props.theme.colors.primary};
    color: #FFF;
    border-radius: 10px;
    box-shadow: 10px 5px 5px black;
    display: flex;
    justify-content: center;
    align-items: center;
`;
