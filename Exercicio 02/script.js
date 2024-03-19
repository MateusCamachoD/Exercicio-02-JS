/*

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

const estudantes = [
  { nome: "João", nota1: 8, nota2: 7 },
  { nome: "Maria", nota1: 6, nota2: 3 },
  { nome: "Pedro", nota1: 7, nota2: 7 },
  { nome: "Ana", nota1: 9, nota2: 8 },
]

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2
}

function verificarAprovacao(estudante) {
  const media = calcularMedia(estudante.nota1, estudante.nota2)
  if (media >= 6) {
    alert(
      `
    A média do(a) aluno(a) ${estudante.nome} é: ${media.toFixed(2)}.
    Parabéns, ${estudante.nome}! Você foi aprovado(a) no consurso
    `
    )
  } else {
    alert(
      `
    A média do(a) aluno(a) ${estudante.nome} é: ${media.toFixed(2)}.
    ${estudante.nome}, Infelizmente lamentamos informar que você não passou no concurso, mas esperamos você ano que vem, boa sorte!
    `
    )
  }
}

estudantes.forEach(verificarAprovacao)
