import styled from 'styled-components';

export const InputStyled = styled.input`
    border-radius: 5px;
    padding: 5px;
    background-color: transparent;
    color :  var( --main-text);
    width: 150px;
    height : 45px;
    display: block;
`;

export const Container = styled.div`
    margin : 0 20px;
    padding: 15px;
`;

export const SpanStyled = styled.span`
    color: var(--main-text);
`;

export const LabelStyled = styled.label`
   position: relative;
   font-size: 14px;
   padding-top: 20px;
   margin-top: 10px;


  & ${InputStyled}{
    border: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #f2f2f2;
    padding: 12px;
    border-radius: 3px;
    width: 250px;
    outline: none;
    font-size: 14px; 
  } 

  & ${SpanStyled}{
    position: absolute;
    left: 10px;
    top: calc(50%);
    transform: translateY(-50%);
    
  }

`;
