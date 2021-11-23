import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 80vh;
   margin-top: 2rem;

   h1 {
       margin-top: 2rem;
       font-size: 60px;
       color: ${props => props.theme.colors.primary};
   }
`;

export const Form = styled.div`
    background-color: ${props => props.theme.colors.secundary};
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 20px;
    border-radius: 15px;

    span {
        margin-bottom: 50px;
        transition: 200ms;
        font-size: 16px;
        cursor: pointer;
        color: ${props => props.theme.colors.primary};
    }
    span:hover{
        color: ${props => props.theme.colors.text};
    }
`;

export const Inputs = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
`;