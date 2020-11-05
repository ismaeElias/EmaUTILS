import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/Navbar";
import Container from "../../components/Container";
import HomeContainer from "../../components/HomeContainer";

function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <HomeContainer />
      </Container>
    </>
  );
}

export default Home;
