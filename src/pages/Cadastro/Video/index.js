import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroVideo() {
  const [videos, setVideos] = useState([]);
  const valoresIniciais = {
    url: '',
    descricao: '',
    cor: '#000',
  };
  const [values, setValues] = useState({ valoresIniciais });

  function handleChange(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setVideos([...videos, values]);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Video:
        {values.nome}
      </h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          value={values.url}
          name="Url"
          type="text"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <FormField
          value={values.description}
          name="descricao"
          type="textArea"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <FormField
          value={values.cor}
          name="cor"
          type="color"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {videos.map((video) => (
          <li key={`${video.nome}`}>{video.nome}</li>
        ))}
      </ul>

      <Link to="/cadastro/video">Cadastrar Video</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
