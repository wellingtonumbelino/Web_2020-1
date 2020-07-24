import React from 'react';
import './styles/App.css';

import Questao1 from './components/questao1/Questao1';
import Questao2 from './components/questao2/Questao2';
import Questao3 from './components/questao3/Questao3-filho';
import Questao4 from './components/questao4/Questao4-filho';

function App() {
  return (
    <div className="App">
      <div className='qt1'>
        <h2>Questão 1</h2>
        <Questao1 />
      </div>
      <div className='qt2'>
        <h2>Questão 2</h2>
        <Questao2
          nome='Wellington Umbelino'
          curso='Sistemas de Informação'
          cidade='Mombaça'
        />
      </div>

      <div className='qt3'>
        <h2>Questão 3</h2>
        <Questao3 />
      </div>

      <div className='qt4'>
        <h2>Questão 4</h2>
        <Questao4 />
      </div>
    </div>
  );
}

export default App;