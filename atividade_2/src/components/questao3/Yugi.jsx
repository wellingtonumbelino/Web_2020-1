import React from 'react';

import yugi from '../../assets/yugi.png';
import kaiba from '../../assets/kaiba.jpg';

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
    <Hero name="Yami Yugi" imgHero={yugi} />
    <Enemy name="Seto Kaiba" imgEnemy={kaiba} />
  </div>

export default Arena;
