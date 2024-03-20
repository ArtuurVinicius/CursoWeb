const alunos = [
    { nome: "João", nota: 7.9},
    { nome: "Maria", nota: 9.2}
]

//imperativo
// Nele, o mais importante é como as coisas serao feitas
let total1 = 0
for(var i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// declarativo
// O que tem que ser feito é mais importante de como tem que ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) // reduce reduz / agrega os valores em um só
console.log(total2 / alunos.length)
