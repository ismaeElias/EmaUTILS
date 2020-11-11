import React, { useState } from "react";
import {
  Layout,
  Header,
  SectionMain,
  ContainerHeader,
  TextAreaStyled,
  Button
} from "./style";
import Input from "../Input";

import api from "../../services/api";

function PageConcatenador() {

  const [inicialText, setInicialText] = useState("");
  const [finalText, setFinalText] = useState("");
  const [text, setText] = useState("");
  const [resultText, setResultText] = useState("");

  return (
    <Layout onSubmit={(event) => {
      event.preventDefault();

      api.post('/', {
        texto: text,
        inicial: inicialText,
        final: finalText
      }).then(function (response) {
        setResultText(response.data);
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      })
    }}>
      <Header>
        <ContainerHeader>
          <Input
            id="inicial"
            title="Inicial"
            textPlaceholder="Caracter Inicial"
            valueText={inicialText}
            onChangeForm={setInicialText}
          />
          <Input
            id="final"
            title="Final"
            textPlaceholder="Caracter Final"
            valueText={finalText}
            onChangeForm={setFinalText}
          />
        </ContainerHeader>
      </Header>
      <SectionMain>
        <TextAreaStyled
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <Button type="submit"><p>&#8646;</p></Button>
        <TextAreaStyled
          disabled
          value={resultText}
        />
      </SectionMain>
    </Layout>
  );
}

export default PageConcatenador;
