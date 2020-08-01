import React from 'react';

import asta from '../../assets/asta.png';
import yuno from '../../assets/yuno.png';

const Hero = (props) =>
  <div>
    <h3>Hero: {props.name}</h3>
    <img src={props.imgHero} />
  </div>

const Enemy = (props) =>
  <div>
    <h3>Enemy: {props.name}</h3>
    <img src={props.imgEnemy} />
  </div>

const Arena = (props) =>
  <div>
    <Hero name="Asta" imgHero={asta} />
    <Enemy name="Yuno" imgEnemy={yuno} />
  </div>

export default Arena;
