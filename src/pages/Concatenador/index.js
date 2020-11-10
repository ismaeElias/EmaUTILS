import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/Navbar";
import Container from "../../components/Container";
import PageConcatenador from '../../components/Concatenador';

function Concatenador() {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <PageConcatenador />
      </Container>
    </>
  );
}

export default Concatenador;
