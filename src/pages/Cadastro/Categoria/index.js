import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { SubmitButton, ClearButton } from '../../../components/Button';
import useForm from '../../../hooks/useForm'
import categoriasRepositories from '../../../repositories/categorias'

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepositories.getAll().then((response) => {
      setCategorias([...response]);
    });
  }, []);

  const { handleChange, handleSubmit, clearForm, values } = useForm({
    nome: '',
    descricao: '',
    cor: '#000',
  },
    setCategorias,
    categorias
  );

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          value={values.nome}
          label="Nome da Categoria"
          name="nome"
          type="text"
          onChange={(e) => handleChange('nome', e.target.value)}
        />
        <FormField
          value={values.descricao}
          label="descricao"
          name="descricao"
          type="textarea"
          onChange={(e) => handleChange('descricao', e.target.value)}
        />
        <FormField
          value={values.cor}
          label="cor"
          name="cor"
          type="color"
          onChange={(e) => handleChange('cor', e.target.value)}
        />
        <SubmitButton type="submit">Enviar</SubmitButton>
        <ClearButton onClick={() => clearForm()}>Limpar</ClearButton>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/cadastro/video">Cadastrar Video</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
