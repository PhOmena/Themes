import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }

    input {
        background: ${props => props.theme.colors.background};
        width: 90%;
        height: 3rem;
        margin: .8rem 0 .8rem 0;
        border-radius: 50px;
        padding: 20px;
        transition: 200ms;
    }

    input:focus {
        cursor: pointer;
        border: 1px solid ${props => props.theme.colors.primary};
    }

    input:hover {
        cursor: pointer;
        border: 1px solid ${props => props.theme.colors.primary};
    }

    button {
        background: ${props => props.theme.colors.primary};
        width: 90%;
        height: 3rem;
        margin: 5rem 0 .8rem 0;
        border-radius: 50px;
        padding: 20px;
        transition: 200ms;
        border: none;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.secundary};
    }

    button:hover{
        cursor: pointer;
        border: 1px solid ${props => props.theme.colors.secundary};
    }
`;