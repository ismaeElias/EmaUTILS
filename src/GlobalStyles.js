import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --main-color        : #FF5B28;
        --main-text         : #595959;
        --main-text-light   : #FFF;
        --main-background   : #F5F5F5;
        --main-bg-container : #E8E8E8;
        --main-border       : #BFBFBF;
    }

    *{
        margin: 0;
        padding:0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html,body{
        width: 100vw;
        height: 100vh;
    }
`;

const GridLayout = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 85px auto;
    grid-template-rows: 80px auto;
    grid-template-areas:
    "HD HD"
    "NB CT";
`;

export { GlobalStyles, GridLayout };
