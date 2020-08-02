import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { SubmitButton, ClearButton } from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import useForm from '../../../hooks/useForm';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values, clearForm } = useForm({
    url: '',
    titulo: '',
    categoriaId: '',
  });
  const[ categorias, setCategorias ] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo) 

  useEffect(() => {
    categoriasRepository.getAll().then((response) => {
      setCategorias(response);
    });
  }, []);


  function handleSubmit(e) {
    e.preventDefault();

    const categoriaId = categorias.find((categoria) => {
      return categoria.titulo === values.categoriaId;
    });

    videosRepository
      .create({
        titulo: values.titulo,
        url: values.url,
        categoriaId: categoriaId.id,
      })
      .then(() => {
        history.push('/');
      });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video: {values.nome}</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          value={values.titulo}
          label="titulo"
          name="titulo"
          type="text"
          onChange={(e) => handleChange('titulo', e.target.value)}
        />
        <FormField
          value={values.url}
          label="url"
          name="url"
          type="text"
          onChange={(e) => handleChange('url', e.target.value)}
        />
        <FormField
          value={values.categoriaId}
          label="escolha uma categoria"
          name="categoriaId"
          type="text"
          suggestions={categoryTitles}
          onChange={(e) => handleChange('categoriaId', e.target.value)}
        />
        <SubmitButton type="submit">Enviar</SubmitButton>
      </form>
      <ClearButton onClick={() => clearForm()}>Limpar</ClearButton>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
