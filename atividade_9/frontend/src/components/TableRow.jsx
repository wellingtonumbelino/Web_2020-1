import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import FirebaseService from '../services/FirebaseService';

export default class TableRow extends Component {

  constructor(props) {
    super(props)
    this.apagar = this.apagar.bind(this)
  }

  apagar(id, nome) {
    let res = window.confirm(`Deseja apagar ${nome}?`);
    if (res) {
      // this.props.firebase.getFirestore().collection('disciplinas').doc(id).delete()
      //   .then(() => console.log(`${nome} apagado.`))
      //   .catch(error => console.log(error));
      FirebaseService.delete(this.props.firebase.getFirestore(), (mensagem) => {
        if (mensagem === 'ok') {
          console.log(`${nome}, apagado`)
        }
      }, id);
    }
  }

  render() {
    return (
      <tr>
        <td>
          {/* {this.props.disciplina.id} -> json_server */}
          {this.props.disciplina._id}
        </td>
        <td>
          {this.props.disciplina.nome}
        </td>
        <td>
          {this.props.disciplina.curso}
        </td>
        <td>
          {this.props.disciplina.capacidade}
        </td>
        <td style={{ textAlign: "center" }}>
          <Link to={"/edit/" + this.props.disciplina._id} className="btn btn-primary">Editar</Link>
        </td>
        <td style={{ textAlign: "center" }}>
          <button onClick={
            () => this.apagar(this.props.disciplina._id, this.props.disciplina.nome)
          } className="btn btn-danger">Apagar</button>
        </td>
      </tr>
    )
  }
}
