import React from 'react';
import './styles/App.css';

import Questao1 from './components/questao1/Questao1';
import Questao2 from './components/questao2/Questao2';
import World from './components/questao3/World';
import Yugi from './components/questao3/Yugi';
import Nanatsu from './components/questao3/Nanatsu';
import { Hero, Enemy, ArenaChildren } from './components/questao4/Arena'


function App() {
  return (
    <div className="App">

      <div className='qt1'>
        <h2>Questão 1</h2>
        <Questao1 />
      </div>

      <div className='qt2'>
        <h2>Questão 2</h2>
        <Questao2 />
      </div>

      <div className='qt3'>
        <h2>Questão 3</h2>
        <World>
          <Questao2 />
          <Nanatsu />
          <Yugi />
        </World>
      </div>

      <div className='qt4'>
        <h2>Questão 4</h2>
        <ArenaChildren arena='Konoha'>
          <Hero name='Naruto' />
          <Enemy name='Sasuke' />
        </ArenaChildren>
      </div>

    </div>
  );
}

export default App;
