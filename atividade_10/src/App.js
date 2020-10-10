import React, { Component } from 'react';
import './App.css';

import Navigate from './components/Navigate';
import Maior from './components/Maior';
import Multiplicacao from './components/Multiplicacao';
import Soma from './components/Soma';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: 5, num2: 2 }
  }

  render() {
    return (
      <div className='container'>
        <h1>Atividade 10</h1>
        <div className='line'>
          <Navigate num1={this.state.num1} num2={this.state.num2} />
        </div>
        <div className='line'>
          <Soma num1={this.state.num1} num2={this.state.num2} />
          <Multiplicacao num1={this.state.num1} num2={this.state.num2} />
          <Maior num1={this.state.num1} num2={this.state.num2} />
        </div>
      </div>
    )
  }
}