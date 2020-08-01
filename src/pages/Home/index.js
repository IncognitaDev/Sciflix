import React from 'react';

import styled from 'styled-components';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);

  padding-top: 80px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWrapper>
      <Header />
      <BannerMain
        url="https://www.youtube.com/watch?v=ZY3-MFxVdEw"
        videoTitle="O que faz uma desenvolvedora front-end? #HipstersPontoTube"
        videoDescription=""
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      {dadosIniciais.categorias
        .filter((categoria, i) => i !== 0)
        .map((dados) => (
          <Carousel key={dados.titulo} category={dados} />
        ))}
      <Footer />
    </AppWrapper>
  );
}

export default Home;
