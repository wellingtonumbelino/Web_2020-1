import React from 'react';

import naruto from '../../assets/naruto.png';
import sasuke from '../../assets/sasuke.png';

const Hero = (props) =>
  <div>
    <h3> Hero: {props.name}</h3>
    <img src={naruto} width="300px" />
    <h3> Arena: {props.arena}</h3>
  </div>



const Enemy = (props) =>
  <div>
    <br />
    <h3>Enemy: {props.name}</h3>
    <img src={sasuke} width="300px" />
    <h3> Arena: {props.arena}</h3>
  </div>


const ArenaChildren = (props) => (
  <div>
    <h3>{props.arena}</h3>

    {React.Children.map(props.children, arena => {
      return React.cloneElement(arena, { ...props });
    })}
  </div>
)

export { Hero, Enemy, ArenaChildren }