import { useState } from 'react';

function useForm({valoresIniciais, validate}) {
  const [touched, setTouchedField] = useState({});
  const [values, setValues] = useState(valoresIniciais);
  const [errors, setErrors] = useState({});

  function fieldTouch(e) {
    const key = e.target.getAttribute('name');
    setTouchedField({
      ...touched,
      [key]: true,
    });
  }

  function validateValues() {
    setErrors(validate(values));
  }

  function handleChange(e) {
    const key = e.target.getAttribute('name');
    const { value } = e.target;
    setValues({
      ...values,
      [key]: value,
    });
  }

  function clearForm(e) {
    e.preventDefault()

    setValues({ valoresIniciais });
  }

  return {
    handleChange,
    fieldTouch,
    clearForm,
    validateValues,
    values,
    errors,
    touched,
  };
}

export default useForm;
