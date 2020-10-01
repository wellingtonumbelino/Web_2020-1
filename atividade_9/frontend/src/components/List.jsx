import React, { Component } from 'react';

import '../styles/list.css';
import TableRow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext';

const ListPage = () => (
  <FirebaseContext.Consumer>
    { (contexto) => <List firebase={contexto} />}
  </FirebaseContext.Consumer>
)

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { disciplinas: [], loading: false }
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.ref = this.props.firebase.getFirestore().collection('disciplinas');
    this.ref.onSnapshot(this.alimentarDisciplinas.bind(this));
  }

  alimentarDisciplinas(query) {
    let disciplinas = [];
    query.forEach(
      (doc) => {
        const { nome, curso, capacidade } = doc.data();
        disciplinas.push(
          {
            _id: doc.id,
            nome,
            curso,
            capacidade,
          }
        )//push
      }//doc
    )//forEach

    this.setState({ disciplinas: disciplinas, loading: false });
  }

  mountTable() {
    if (!this.state.disciplinas)
      return

    return this.state.disciplinas.map(
      (disc, i) => {
        return <TableRow disciplina={disc} key={i} firebase={this.props.firebase} />
      }
    )
  }

  gerarConteudo() {
    if (this.state.loading) {
      return (
        <tr>
          <td colSpan='6' style={{ textAlign: "center" }}>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </td>
        </tr >
      )
    } else return this.mountTable();
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
            {this.gerarConteudo()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListPage;