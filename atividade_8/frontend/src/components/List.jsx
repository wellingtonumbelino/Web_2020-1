import React, { Component } from 'react';
import axios from 'axios';

import '../styles/list.css';
import TableRow from './TableRow';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { disciplinas: [] }
    this.apagarElementoPorId = this.apagarElementoPorId.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3002/disciplinas/list') //express
      //axios.get('http://localhost:3001/disciplinas')
      .then(
        (response) => {
          this.setState({ disciplinas: response.data });
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      );
  }

  mountTable() {
    if (!this.state.disciplinas)
      return

    return this.state.disciplinas.map(
      (disc, i) => {
        return <TableRow disciplina={disc} key={i} apagarElementoPorId={this.apagarElementoPorId} />
      }
    )
  }

  //versão com Json-server
  // apagarElementoPorId(idDisc) {
  //   let tempDisciplinas = this.state.disciplinas;

  //   for (let i = 0; i < tempDisciplinas.length; i++) {
  //     if (tempDisciplinas[i].id === idDisc) {
  //       tempDisciplinas.splice(i, 1);
  //     }
  //   }

  //   this.setState({ disciplinas: tempDisciplinas });
  // }

  apagarElementoPorId(idDisc) {
    let tempDisciplinas = this.state.disciplinas;

    for (let i = 0; i < tempDisciplinas.length; i++) {
      if (tempDisciplinas[i]._id === idDisc) {
        tempDisciplinas.splice(i, 1);
      }
    }

    this.setState({ disciplinas: tempDisciplinas });
  }

  render() {
    return (
      <div className='style-list'>
        <h3>Listar Disciplinas</h3>
        <table className='table table-striped'>
          {/* cabeçalho da tabela */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Capacidade</th>
              <th colSpan='2'></th>
            </tr>
          </thead>
          {/* corpo da tabela */}
          <tbody>
            {this.mountTable()}
          </tbody>
        </table>
      </div>
    )
  }
}