import React from 'react';

export default props =>
  <div>
    <center>
      <table>
        <tr>
          <td><b>Aluno:</b> {props.nome}</td>
        </tr>
        <tr>
          <td><b>Curso:</b> {props.curso}</td>
        </tr>
        <tr>
          <td><b>Cidade:</b> {props.cidade}</td>
        </tr>
      </table>
    </center>
  </div>