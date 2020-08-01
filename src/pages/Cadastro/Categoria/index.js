import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { SubmitButton , ClearButton } from  '../../../components/Button'

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [values, setValues] = useState({ valoresIniciais });
  const URL = location.hostname.includes('localhost') 
    ? 'https://localhost:3333/categorias' 
    : 'https://sci-flix.herokuapp.com/categorias'

  useEffect(() =>{
    fetch('https://localhost:3333/categorias').then(async response => {
      const resposta = await response.json()
      setCategorias([resposta])
    })
  }, [])

  function handleChange(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCategorias([...categorias, values]);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

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
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/cadastro/video">Cadastrar Video</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
