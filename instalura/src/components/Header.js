import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
        <header className="header container">
            <h1 className="header-logo">Instalura</h1>
            <Form />
            <Nav />
        </header>
        );
    }
}

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className="header-nav">
                    <li className="header-nav-item">
                        <a href="#">
                            ♡
                            {/*                 ♥ */}
                            {/* Quem deu like nas minhas fotos */}
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

class Form extends Component{
    render(){
        return(
            <form className="header-busca">
                <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo" />
                <input type="submit" value="Buscar" className="header-busca-submit" />
            </form>
        );
    }
}
