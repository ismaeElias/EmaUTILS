import React from "react";
import { GlobalStyles, GridLayout } from "./GlobalStyles";
import Routes from './Routes';

function App() {
  return (
    <GridLayout>
      <GlobalStyles />
      <Routes />
    </GridLayout>
  );
}

export default App;
