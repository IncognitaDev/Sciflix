import React from 'react';
import styled from 'styled-components'

import Header from "../../components/Header";
import Footer from '../../components/Footer'

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-left: 5%;
  padding-right: 5%;
` 

function PageDefault({ children }) {
  return (
    <>
      <Header/>
      <Main>
        {children}
      </Main>
      <Footer/>
    </>
  );
}

export default PageDefault;