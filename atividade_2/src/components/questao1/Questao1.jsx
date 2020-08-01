import React from 'react';

import asta from '../../assets/asta.png';
import yuno from '../../assets/yuno.png';

const Hero = (props) =>
  <div>
    <h3>Hero: {props.name}</h3>
    <img src={asta} />
  </div>

const Enemy = (props) =>
  <div>
    <h3>Enemy: {props.name}</h3>
    <img src={yuno} />
  </div>

const Arena = (props) =>
  <div>
    <Hero name="Asta" />
    <Enemy name="Yuno" />
  </div>

export default Arena;
