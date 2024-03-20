// serve pra transformar um array em um unico elemento
const alunos = [
    { nome:'Joao', nota: 7.3, bolsista: false},
    { nome:'Maria', nota: 9.5, bolsista: true},
    { nome:'Mario', nota: 9.8, bolsista: false},
    { nome:'Ana', nota: 9.8, bolsista: false},
]

console.log(alunos.map(a => a.nota))
const resultados = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual
}, 10) // faz o valor inicial ser 10

console.log(resultados)