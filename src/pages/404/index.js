import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';

function Pagina404() {
  return (
    <PageDefault>
      <h1>Página 404</h1>

      <Button as={Link} className="ButtonLink" to="/">
        Ir para a Home
      </Button>
    </PageDefault>
  );
}

export default Pagina404;
