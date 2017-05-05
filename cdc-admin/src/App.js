import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/custom.css';
import $ from 'jquery';
import InputCustomizado from './components/InputCustomizado';

/** Globais **/
let URL = "http://cdc-react.herokuapp.com/api/autores";

class App extends Component {
  constructor() {
    super();
    this.state = { lista: [], nome: '', email: '', senha: '' }
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }
  componentDidMount() {
    $.ajax({
      url: URL,
      dataType: 'json',
      success: function (res) {
        this.setState({ lista: res });
      }.bind(this)
    });

  }
  /** Funções de Estado **/
  enviaForm(event) {
    event.preventDefault();
    $.ajax({
      url: URL,
      contentType: 'application/json',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify({ nome: this.state.nome, email: this.state.email, senha: this.state.senha }),
      success: function (res) {
        console.log('Enviando dados...');
        this.setState({ lista: res });
        this.setState({ nome: '' });
        this.setState({ email: '' });
        this.setState({ senha: '' });
      }.bind(this),
      error: function (err) {
        console.log(err);
      }
    });
  }

  setNome(event) {
    this.setState({ nome: event.target.value });
  }

  setEmail(event) {
    this.setState({ email: event.target.value });
  }

  setSenha(event) {
    this.setState({ senha: event.target.value });
  }

  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>
            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livro</a></li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Cadastro de Autores</h1>
          </div>
          <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm}>
                <InputCustomizado label="Nome" id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} />
                <InputCustomizado label="Email" id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} />
                <InputCustomizado label="Senha" id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} />
                <div className="pure-control-group">
                  <label></label>
                  <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                </div>
              </form>
            </div>

            <div>
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.lista.map(autor => {
                      return (
                        <tr key={autor.id}>
                          <td>{autor.nome}</td>
                          <td>{autor.email}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
