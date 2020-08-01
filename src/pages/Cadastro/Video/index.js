import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { SubmitButton , ClearButton } from '../../../components/Button'

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
      <h1>Cadastro de Video: {values.nome}</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          value={values.nome}
          label='Nome da Categoria'
          name="nome"
          type="text"
          onChange={(e) => handleChange('nome', e.target.value)}
        />
        <FormField
          value={values.descricao}
          label='descricao'
          name="descricao"
          type='textarea'
          onChange={(e) => handleChange('descricao', e.target.value)}
        />
        <FormField
          value={values.cor}
          label='cor'
          name="cor"
          type="color"
          onChange={(e) => handleChange('cor', e.target.value)}
        />
        <SubmitButton type="submit">Enviar</SubmitButton>
        <ClearButton>Limpar</ClearButton>
      </form>

      <ul>
        {videos.map((video) => (
          <li key={`${video.nome}`}>{video.nome}</li>
        ))}
      </ul>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
