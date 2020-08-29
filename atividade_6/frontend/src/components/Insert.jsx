import React, { Component, useState } from 'react';
import axios from 'axios';

import '../styles/insert.css';

export default class Insert extends Component {
  // construtor da classe
  constructor(props) {
    super(props);

    this.state = { nome: '', curso: '', capacidade: '' }

    this.setNome = this.setNome.bind(this);
    this.setCurso = this.setCurso.bind(this);
    this.setCapacidade = this.setCapacidade.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //funções set para mudar estado
  setNome(e) {
    this.setState({ nome: e.target.value });
  }

  setCurso(e) {
    this.setState({ curso: e.target.value });
  }

  setCapacidade(e) {
    this.setState({ capacidade: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log('Nome: ' + this.state.nome);
    // console.log('Curso: ' + this.state.curso);
    // console.log('IRA: ' + this.state.ira);
    const novaDisciplina = { nome: this.state.nome, curso: this.state.curso, capacidade: this.state.capacidade }

    // axios.post('http://localhost:3001/disciplinas', novaDisciplina) -> json-server
    axios.post('http://localhost:3002/disciplinas/register', novaDisciplina)
      .then(
        (response) => {
          alert('Disciplina inserida com sucesso!');
        }
      )
      .catch(
        (error) => {
          alert('Erro ao inserir disciplina!')
        }
      );

    this.setState({ nome: '', curso: '', capacidade: '' });
  }

  render() {
    return (
      <div className='style'>
        <h3>Criar Disciplina</h3>
        {/* formulario de criação de uma disciplina */}
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input type='text' placeholder='Nome' className='form-control'
              value={this.state.nome}
              onChange={this.setNome}
            />
          </div>

          <div className='form-group'>
            <input type='text' placeholder='Curso' className='form-control'
              value={this.state.curso}
              onChange={this.setCurso}
            />
          </div>

          <div className='form-group'>
            <input type='text' placeholder='Capacidade' className='form-control'
              value={this.state.capacidade}
              onChange={this.setCapacidade}
            />
          </div>

          <div>
            <input type='submit' value='Criar Disciplina' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}