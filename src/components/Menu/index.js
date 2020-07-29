import React from 'react';
import logo from '../../assets/images/logo.png';
import './Menu.css';
import Button from '../Button';

//import ButtonLink from '../components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="logo" src={logo} alt="Logo do Obeflix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;