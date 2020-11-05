import React from "react";
import { Container,Image,DescriptionContainer } from "./styles";
import ImageHome from "../../images/image-home.png";
function HomeContainer() {
  return (
    <Container>
        <DescriptionContainer>
            <p>EmaUTILS é uma ferramenta desenvolvida pelo suporte DOX a fim de facilitar o  desenvolvimento PEX entre outras funcionalidades.</p>
        </DescriptionContainer>
      <Image src={ImageHome} alt="logo home" />
    </Container>
  );
}

export default HomeContainer;
