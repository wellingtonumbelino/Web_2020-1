import React, { Component } from 'react';
import './App.css';

import Card from './components/Card';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Hello</h1>
        <div className='line'>
          <Card title='Número 1' />
          <Card title='Número 2' />
        </div>
        <div className='line'>
          <Card title='Soma' />
          <Card title='Multiplicação' />
          <Card title='Maior' />
        </div>
      </div>
    )
  }
}