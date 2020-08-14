import React, { Component } from 'react'
import axios from 'axios'

import '../styles/edit.css';

export default class Edit extends Component {

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
    //console.log("id: " + this.props.match.params.id)
    axios.get('http://localhost:3001/disciplinas/' + this.props.match.params.id)
      .then(
        (res) => {
          this.setState(
            {
              nome: res.data.nome,
              curso: res.data.curso,
              capacidade: res.data.capacidade
            }
          )
        }
      )
      .catch(error => console.log(error))
  }

  onSubmit(e) {

    e.preventDefault()

    const disciplinaEditada = {
      nome: this.state.nome,
      curso: this.state.curso,
      capacidade: this.state.capacidade
    }
    axios.put('http://localhost:3001/disciplinas/' + this.props.match.params.id, disciplinaEditada)
      .then(
        (response) => {
          this.props.history.push('/list');
          alert('Disciplina Editada');
        }
      )
      .catch(error => console.log(error))
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