import React, { useState, useEffect } from 'react';
import { Link , useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { SubmitButton, ClearButton } from '../../../components/Button';
import useForm from '../../../hooks/useForm'
import categoriasRepositories from '../../../repositories/categorias'

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const form = useForm({ valoresIniciais: {
    nome: '',
    descricao: '',
    cor: '#000',
  }, 
  validate (values){
    const error = {}

    if(!values.nome){
      error.nome = 'insira um nome'
    }
    
    return error
  }
  });

  const history = useHistory()

  useEffect(() => {
    categoriasRepositories.getAll().then((response) => {
      setCategorias([...response]);
    });
  }, []);

  

  function onSubmit(e){
    e.preventDefault()

    if(form.errors === {}){
      const alreadyExists = categorias.find((categoria) => {
        if(categoria.titulo === form.values.nome){
          return true
        }
      });
      
      if(!alreadyExists){
        categoriasRepositories.create({
          titulo: form.values.nome,
          descricao: form.values.descricao,
          cor: form.values.cor
        }).then(() => {
          history.push('/')
        })
      }
    } 
    
  }


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {form.values.nome}</h1>

      <form onSubmit={(e) => onSubmit(e)}>
        <FormField
          value={form.values.nome}
          label="Nome da Categoria"
          name="nome"
          type="text"
          onChange={(e) => form.handleChange(e)}
        />
        {form.touched.name && form.errors.name && <span>{form.errors.name}</span>}
        <FormField
          value={form.values.descricao}
          label="descricao"
          name="descricao"
          type="textarea"
          onChange={(e) => form.handleChange(e)}
        />
        {form.touched.descricao && form.errors.descricao && <span>{form.errors.descricao}</span>}
        <FormField
          value={form.values.cor}
          label="cor"
          name="cor"
          type="color"
          onChange={(e) => form.handleChange(e)}
        />
        <div style={{marginTop: "30px"}}>
          <SubmitButton type="submit">Enviar</SubmitButton>
          <ClearButton onClick={(e) => form.clearForm(e)}>Limpar</ClearButton>
        </div>
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
