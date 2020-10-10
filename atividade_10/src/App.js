import React, { Component } from 'react';

//imports locais
import './App.css';
import Navigate from './components/Navigate';
import Maior from './components/Maior';
import Multiplicacao from './components/Multiplicacao';
import Soma from './components/Soma';

//criando classe
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '' }
    this.setNovoNum1 = this.setNovoNum1.bind(this);
    this.setNovoNum2 = this.setNovoNum2.bind(this);
  }

  //criando os set para alterar o valor de num1 e num2
  setNovoNum1(novoNum1) {
    this.setState({ num1: novoNum1 });
  }

  setNovoNum2(novoNum2) {
    this.setState({ num2: novoNum2 });
  }

  //render
  render() {
    return (
      <div className='container'>
        <h1>Atividade 10</h1>
        <div className='line'>
          {/* Navigate, para enviar as informações */}
          <Navigate
            // Seta os valores de num1 e num2
            num1={this.state.num1}
            num2={this.state.num2}
            // Passa via props para o pai os valores inseridos pelo usuário
            setNovoNum1={this.setNovoNum1}
            setNovoNum2={this.setNovoNum2}
          />
        </div>
        <div className='line'>
          {/* Componentes que irão executar as operações */}
          <Soma num1={this.state.num1} num2={this.state.num2} />
          <Multiplicacao num1={this.state.num1} num2={this.state.num2} />
          <Maior num1={this.state.num1} num2={this.state.num2} />
        </div>
      </div>
    )
  }
}