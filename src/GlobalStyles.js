import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --main-color        : #FF5B28;
        --main-text         : #595959;
        --main-text-light   : #FFF;
        --main-background   : #F5F5F5;
        --main-bg-container : #E8E8E8;
        --main-border       : #DEDEDE;
        --main-bg-selected  : #E1E1E1;
    }

    *{
        margin: 0;
        padding:0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

`;

const GridLayout = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 65px auto;
    grid-template-rows: 60px auto;
    grid-template-areas:
    "HD HD"
    "NB CT";
`;

export { GlobalStyles, GridLayout };
