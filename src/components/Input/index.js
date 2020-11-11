import React from "react";
import { InputStyled, Container, LabelStyled, SpanStyled } from "./styles";


function Input({textPlaceholder,title,valueText,id,onChangeForm}) {
 

  return (
    <Container>
      <LabelStyled>
        <InputStyled
          id={id}
          type="text"
          placeholder={textPlaceholder}
          maxLength="10"
          value={valueText}
          onChange={(event) => {
            onChangeForm(event.target.value);
          }}
        />
        <SpanStyled>{title}</SpanStyled>
      </LabelStyled>
    </Container>
  );
}

export default Input;
