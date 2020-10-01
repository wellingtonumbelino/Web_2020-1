import React, { Component, useState } from 'react';
import FirebaseContext from '../utils/FirebaseContext';

import '../styles/insert.css';

const CreatePage = () => (
  <FirebaseContext.Consumer>
    { (contexto) => <Insert firebase={contexto} />}
  </FirebaseContext.Consumer>
)

class Insert extends Component {
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
    this.props.firebase.getFirestore().collection('disciplinas').add(
      {
        nome: this.state.nome,
        curso: this.state.curso,
        capacidade: this.state.capacidade,
      }
    )
      .then(() => console.log(`Disciplinas ${this.state.nome} inserido com sucesso.`))
      .catch(error => console.log(error));

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

export default CreatePage;