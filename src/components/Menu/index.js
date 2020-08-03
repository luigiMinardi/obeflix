/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import logoOver from '../../assets/images/logoOver.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Logo do Obeflix"
          // eslint-disable-next-line max-len
          onMouseOver={(mudancaDaImagemDaLogo) => (mudancaDaImagemDaLogo.currentTarget.src = logoOver)}
          onFocus={(mudancaDaImagemDaLogo) => (mudancaDaImagemDaLogo.currentTarget.src = logoOver)}
          onMouseOut={(mudancaDaImagemDaLogo) => (mudancaDaImagemDaLogo.currentTarget.src = logo)}
          onBlur={(mudancaDaImagemDaLogo) => (mudancaDaImagemDaLogo.currentTarget.src = logo)}
        />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
