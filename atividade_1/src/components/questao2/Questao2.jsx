import React, { Component } from 'react';

export default class Aluno extends Component {
  render() {
    return (
      <div>
        <h4>Nome: {this.props.nome}</h4>
        <h4>Curso: {this.props.curso}</h4>
        <h4>Cidade: {this.props.cidade}</h4>
      </div>
    )
  }
}