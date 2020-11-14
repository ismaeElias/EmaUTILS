import styled from 'styled-components';

export const Layout = styled.form`
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
    align-items:center;
    justify-content:center;
`;


export const TextAreaStyled = styled.textarea`
    width: 40%;
    height : 100%;
    resize: none;
    background-color: var(--main-bg-container); 
    border: 2px solid var(--main-border);
    border-radius: 15px;
    padding: 15px;
    color: var(--main-text);

    transition: all 0.8s ease-in-out;
    &:hover{
        border-color: var(--main-color);
    }
    &:focus{
        border-color: var(--main-color);
    }


  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  ::-webkit-scrollbar-button {
    width: 2px;
    height:10px;
  }
  ::-webkit-scrollbar-thumb {
    background:var(--main-color);
    border: 0px none var(--main-color);
    border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    border: 0px none var(--main-color);
    border-radius: 50px;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export const Button = styled.button`
    background-color : transparent;
    width : 100px;
    padding: 0 10px;
    cursor: pointer;
    border: 2px solid var(--main-color);
    color : var(--main-color);
    border-radius : 5px;
    font-size: 30px;
    font-weight : bold;
    transition: all 0.8s ease-in-out;

    &:hover{
        background-color: var(--main-color);
        color: white;
    }

    &:focus{
      background-color: var(--main-color);
      color: white;
    }
`;


