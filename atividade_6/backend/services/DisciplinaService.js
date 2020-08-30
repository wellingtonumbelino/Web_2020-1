const DisciplinaModel = require('../models/DisciplinaModel');

let array_disciplinas = [
  { _id: 0, nome: 'Desenvolvimento Web', curso: 'Si', capacidade: 40 },
  { _id: 1, nome: 'Banco de Dados', curso: 'Redes', capacidade: 40 },
  { _id: 2, nome: 'Engenharia de Software', curso: 'Si', capacidade: 50 }
];

let _id = 3;

class DisciplinaService {
  static register(data) {
    let disciplina = new DisciplinaModel(
      _id++,
      data.nome,
      data.curso,
      data.capacidade
    );

    array_disciplinas.push(disciplina);

    return disciplina;
  }

  static list() {
    return array_disciplinas;
  }

  static update(_id, data) {
    for (let disc of array_disciplinas) { //enhaced
      if (disc._id == _id) {
        disc.nome = data.nome
        disc.curso = data.curso
        disc.capacidade = data.capacidade
        return disc
      }
    }
    return null;
  }

  static delete(_id) {
    for (let i = 0; i < array_disciplinas.length; i++) {
      if (array_disciplinas[i]._id == _id) {
        array_disciplinas.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  static retrieve(_id) {
    for (let i = 0; i < array_disciplinas.length; i++) {
      if (array_disciplinas[i]._id == _id) {
        return array_disciplinas[i];
      }
    }
    return {}
  }
}

module.exports = DisciplinaService;