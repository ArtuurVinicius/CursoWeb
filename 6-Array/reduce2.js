const alunos = [
    { nome:'Joao', nota: 7.3, bolsista: false},
    { nome:'Maria', nota: 9.5, bolsista: true},
    { nome:'Mario', nota: 9.8, bolsista: false},
    { nome:'Ana', nota: 9.8, bolsista: false},
]

// Desafio 1: todos os alunos sao bolsistas?
const bolsistas = (resultados, bolsista) => resultados && bolsista
console.log(alunos.map(a => a.bolsista).reduce(bolsistas))
// Desafio 2: algum aluno é bolsista?
const algumB = (resultados, bolsista) => resultados || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumB))