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
                <Link to="/dolar" title="Dolar">
                    <button className="custom-button">Dolar</button>
                </Link>
                <Link to="/bitcoin" title="Bitcoin">
                    <button className="custom-button">Bitcoin</button>
                </Link>
                <Link to="/bankdata" title="Banco">
                    <button className="custom-button"> Bancos </button>
                </Link>
                <Link to="/sitebusca" title="Site">
                    <button className="custom-button">Dados Sites</button>
                </Link>
                <Link to="/feriaBusca" title="Site">
                    <button className="custom-button">Feriados Busca</button>
                </Link>

            </div>
        </>
    );
}

export default MenuB;