import React from "react";

import Header from "./components/Header";
import styled from "styled-components";
import Routes from './routes.js'

const AppWrapper = styled.div`
  background: var(--grayDark);

  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes />
    </AppWrapper>
  );
}

export default App;
