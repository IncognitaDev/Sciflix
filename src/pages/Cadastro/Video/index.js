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
  const[ categorias, setCategorias ] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo) 
  const form = useForm({
    valoresIniciais: {
      url: '',
      titulo: '',
      categoria: '',
    }, 
    validate (values) {
      const error = {}

      if(!values.title){
        error.title = 'insira um titulo'
      }

      if(values.url === 1){
        error.url = 'por favor insira um link';
      }else if(!values.url.includes('.com' || '.app') || values.url.includes(' ') ){
        error.url ='insira um link valido (links n podem incluir \' \' e devem conter \'.com\')';
      }

      if(!values.categoria){
        error.categoria ='por favor insira um link';
      }
      
      return error
    }
});

  useEffect(() => {
    categoriasRepository.getAll().then((response) => {
      setCategorias(response);
    });
  }, []);

  useEffect(()=> {
    form.validateValues()

  }, [form.values])


  function handleSubmit(e) {
    e.preventDefault();

    if(form.errors === {}){
      const categoriaId = categorias.find((categoria) => {
        return categoria.titulo === form.values.categoriaId;
      });

      videosRepository
        .create({
          titulo: form.values.titulo,
          url: form.values.url,
          categoriaId: categoriaId.id,
        })
        .then(() => {
          history.push('/');
        });
    }
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video: {form.values.nome}</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          value={form.values.titulo}
          label="titulo"
          name="titulo"
          type="text"
          onChange={(e) => form.handleChange(e)}
        />
        <FormField
          value={form.values.url}
          label="url"
          name="url"
          type="text"
          onBlur={(e) => form.fieldTouch(e)}
          onChange={(e) => form.handleChange(e)}
        />
        {form.touched.url && form.errors.url && (<span>{form.errors.url}</span>)}
        <FormField
          as='select'
          value={form.values.categoria}
          label="escolha uma categoria"
          name="categoria"
          type="select"
          suggestions={categoryTitles}
          onBlur={(e) => form.fieldTouch(e)}
          onChange={(e) => form.handleChange(e)}
        />
        {form.touched.categoria && form.errors.categoria && (<span>{form.errors.categoria}</span>)}
        <div style={{marginTop: "30px"}}>
          <SubmitButton type="submit">Enviar</SubmitButton>
          <ClearButton onClick={(e) => form.clearForm(e)}>Limpar</ClearButton>
        </div>
      </form>


      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
