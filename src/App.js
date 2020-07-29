import React from 'react';
import Header from './components/header';
import styled from 'styled-components'

const AppWrapper = styled.div`
  background: var(--grayDark);

  padding-top: 94px;

  @media(max-width: 800px){
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header/>
    </AppWrapper>
  );
}

export default App;
