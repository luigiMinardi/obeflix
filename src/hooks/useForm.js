import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    const hex = new RegExp(/[0-9A-Fa-f]{6}/g);
    const isHex = infosDoEvento.target.value;
    if (hex.test(isHex)) {
      document.documentElement.style.setProperty('--button', infosDoEvento.target.value);
    }
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
