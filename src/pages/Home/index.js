import React, { useState, useEffect } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepositories  from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
  categoriasRepositories.getAllWithVideos()
      .then((response) => { 
        console.log(response)
        setDadosIniciais(response)})
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
            url={dadosIniciais[0].videos[0].url}
            videoTitle={dadosIniciais[0].videos[0].titulo}
            videoDescription=""
          />
          <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
          {dadosIniciais
            .filter((categoria, i) => i !== 0)
            .map((dados) => (
              <Carousel key={dados.titulo} category={dados} />
            ))}
        </>
      )}
    </PageDefault>
  );
}

export default Home;
