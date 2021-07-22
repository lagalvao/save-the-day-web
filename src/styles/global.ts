import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    :root{
        font-size: 60%;
        --background: #FAF9F9;
        --input-color: #FFFFFF;
        --btn-color: #31E981;
        --label-color: #9E9E9E;
        --title-color: #000000;
        --input-text-color: #424242;
        --background-navbar: #1A1D1A;
        --error-color: #C83E4D;
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        font: 400 2rem 'Poppins', sans-serif;
    }
    input, textarea, button{
        font: 400 1.6rem 'Ubuntu', sans-serif;
    }
`;