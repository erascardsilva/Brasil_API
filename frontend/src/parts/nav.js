import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function MenuB() {
    return (
        <>
            <div className="logo-container">
                <Link to='/' title='Home'>
                    <img width="160" src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="button-container">
                <Link to="/bankdata" title="Banco">
                    <button className="custom-button"> Bancos </button>
                </Link>
                <Link to="/sitebusca" title="Site">
                    <button className="custom-button">Site Dados</button>
                </Link>
                <button className="custom-button">Dolar</button>
                <button className="custom-button">Endereços</button>
            </div>
        </>
    );
}

export default MenuB;