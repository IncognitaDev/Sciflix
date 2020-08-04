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

  const form = useForm({ valoresIniciais: {
    nome: '',
    descricao: '',
    cor: '#000',
  }, 
  validate (values){
    const error = {}

    if(!values.nome){
      error.nome = 'insira um nome '
    }
    
    return error
  }

});

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {form.values.nome}</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          value={form.values.nome}
          label="Nome da Categoria"
          name="nome"
          type="text"
          onChange={(e) => form.handleChange(e)}
        />
        <FormField
          value={form.values.descricao}
          label="descricao"
          name="descricao"
          type="textarea"
          onChange={(e) => form.handleChange(e)}
        />
        <FormField
          value={form.values.cor}
          label="cor"
          name="cor"
          type="color"
          onChange={(e) => form.handleChange(e)}
        />
        <SubmitButton type="submit">Enviar</SubmitButton>
        <ClearButton onClick={(e) => form.clearForm(e)}>Limpar</ClearButton>
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
