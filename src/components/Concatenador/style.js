import styled from 'styled-components';

export const Layout = styled.div`
    width : 100%;
    height : 100%;
    
    display: grid;
    grid-template-rows: 110px auto;
    grid-template-columns: auto;

    grid-template-areas: 
        'HD'
        'CT'
    ;
`;

export const Header = styled.header`
    grid-area: HD;
    padding: 10px 20px;
`;

export const SectionMain = styled.section`
    align-items : center;
    display: flex;
    grid-area: CT;
    width: 100%;
    justify-content: space-between;
    padding: 10px 20px;
`;


export const ContainerHeader = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--main-bg-container); 
    border: 2px solid var(--main-border);
    border-radius: 15px;
    padding: 10px;
    display : flex;
`;


export const TextAreaStyled = styled.textarea`
    width: 40%;
    height : 500px;
    resize: none;
    background-color: var(--main-bg-container); 
    border: 2px solid var(--main-border);
    border-radius: 15px;
    padding: 2px;
    color: var(--main-text);
`;




