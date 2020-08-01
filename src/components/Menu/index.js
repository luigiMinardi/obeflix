import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo do Obeflix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
