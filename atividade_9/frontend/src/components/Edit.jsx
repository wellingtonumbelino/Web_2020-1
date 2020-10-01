import React, { Component } from 'react'

import '../styles/edit.css';

import FirebaseContext from '../utils/FirebaseContext';

const EditPage = (props) => (
  <FirebaseContext.Consumer>
    { (contexto) => <Edit firebase={contexto} id={props.match.params.id} />}
  </FirebaseContext.Consumer>
)

class Edit extends Component {

  constructor(props) {

    super(props)

    this.state = { nome: '', curso: '', capacidade: '' }
    this.setNome = this.setNome.bind(this)
    this.setCurso = this.setCurso.bind(this)
    this.setCapacidade = this.setCapacidade.bind(this)

    this.onSubmit = this.onSubmit.bind(this)

  }

  setNome(e) {

    this.setState({ nome: e.target.value })

  }

  setCurso(e) {

    this.setState({ curso: e.target.value })

  }

  setCapacidade(e) {

    this.setState({ capacidade: e.target.value })

  }

  componentDidMount() {
    this.props.firebase.getFirestore().collection('disciplinas').doc(this.props.id).get()
      .then(
        (doc) => {
          this.setState({
            nome: doc.data().nome,
            curso: doc.data().curso,
            capacidade: doc.data().capacidade
          })
        }
      )
      .catch((error) => { console.log(error) });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.firebase.getFirestore().collection('disciplinas').doc(this.props.id).set(
      {
        nome: this.state.nome,
        curso: this.state.curso,
        capacidade: this.state.capacidade
      }
    )
      .then(() => { console.log('Estudante Atualizado.') })
      .cacth((error) => { console.log(error) });
  }

  render() {
    return (
      <div className='style-edit'>

        <h3>Editar Disciplina</h3>

        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <input type="text" className="form-control" placeholder='Nome'
              value={this.state.nome} onChange={this.setNome} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control" placeholder='Curso'
              value={this.state.curso} onChange={this.setCurso} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control" placeholder='Capacidade'
              value={this.state.capacidade} onChange={this.setCapacidade} />
          </div>

          <div className="form-group">
            <input type="submit" value="Editar Disciplina" className="btn btn-primary" />
          </div>

        </form>
      </div>
    )
  }
}

export default EditPage;