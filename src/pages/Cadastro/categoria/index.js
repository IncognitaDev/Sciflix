import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import SubmitButton from  './styles'


function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
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

    setCategorias([...categorias, values]);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          value={values.name}
          name="nome"
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
        <SubmitButton type="submit">Cadastrar</SubmitButton>
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
