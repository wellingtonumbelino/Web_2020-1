import React from 'react';

import meliodas from '../../assets/meliodas.png';
import ban from '../../assets/ban.png';

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
    <Hero name="Meliodas" imgHero={meliodas} />
    <Enemy name="Ban" imgEnemy={ban} />
  </div>

export default Arena;
