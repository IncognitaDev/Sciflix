import React from "react";

import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import dadosIniciais from "../../data/dados_iniciais.json";

function Home() {
  return (
    <div>
      <BannerMain
        url="https://www.youtube.com/watch?v=ZY3-MFxVdEw"
        videoTitle="O que faz uma desenvolvedora front-end? #HipstersPontoTube"
        videoDescription=""
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      {dadosIniciais.categorias
        .filter((categoria , i) => i !== 0)
        .map((dados) => (
          <Carousel category={dados} />
        ))}
    </div>
  );
}


export default Home;