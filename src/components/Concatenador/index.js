import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import {
  Layout,
  Header,
  SectionMain,
  ContainerHeader,
  TextAreaStyled,
  Button,
} from "./style";
import Input from "../Input";
import Spinner from "../Spinner";

import api from "../../services/api";

function PageConcatenador() {
  const [inicialText, setInicialText] = useState("");
  const [finalText, setFinalText] = useState("");
  const [text, setText] = useState("");
  const [resultText, setResultText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handlerApi() {
    setLoading(true);
    try {
      await api
        .post("/", {
          texto: text,
          inicial: inicialText,
          final: finalText,
        })
        .then((response) => {
          setResultText(response.data);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Layout
      onSubmit={async (event) => {
        event.preventDefault();
        handlerApi();
      }}
    >
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
        <Button type="submit" id="submit" disabled={loading}>
          {loading && <Spinner />}
          {!loading && <p>&#8646;</p>}
        </Button>

        <TextAreaStyled
          data-tip="Copiado!"
          data-event="dblclick"
          defaultValue={resultText}
          onClick={(e) => {
            let TextArea = e.target; 
            TextArea.select();
            document.execCommand("copy");
          }}
        />

        <ReactTooltip globalEventOff="click" />
      </SectionMain>
    </Layout>
  );
}

export default PageConcatenador;
