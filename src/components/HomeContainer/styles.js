import styled from 'styled-components';

const Container = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction: column;
    justify-content : flex-end;
    align-items : center;
`;

const Image = styled.img`
    width : 900px;
    height : 500px
`;

const DescriptionContainer = styled.div`
    background-color: var(--main-bg-container);
    height : 150px;
    margin-bottom: 150px;
    border-radius: 20px;
    border : 1px solid var(--main-border);
    width : 600px;

    display:flex;
    justify-content : center;
    align-items : center;

    & p{
        text-indent: 20px;
        text-align:center;
        font-size : 16px;
        font-weight:bold;
        color: var(--main-text);
    }
`;

export {Container,Image,DescriptionContainer}