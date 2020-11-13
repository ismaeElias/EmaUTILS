import styled from "styled-components";


export const SpinnerStyled = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--main-color);
  border-radius: 50%;
  width: 45px;
  height: 46px;
  padding : 2px;
  margin : 0 auto;
  animation: spin 1s linear infinite;
 

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
