import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function Pagina404(){
  return (
    <PageDefault>
      <h1>Página 404</h1>

      <Link to="/" >
        Ir para a Home
      </Link>
    </PageDefault>
  )
}

export default Pagina404;