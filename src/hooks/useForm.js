import { useState } from 'react'

function useForm(valoresIniciais, set, valueSet) {
  const [values, setValues] = useState({ valoresIniciais });
  

  function handleChange(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    set([...valueSet, values]);
    
  }

  function clearForm() {
    setValues({valoresIniciais});
  }

  return {
    handleChange,
    handleSubmit,
    clearForm,
    values,
  };
}

export default useForm