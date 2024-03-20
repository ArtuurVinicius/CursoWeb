// rest(juntar) spread(espalhar)
// usar rest com parametro da função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1900 }
const clone = { ativo: true, ...funcionario}

console.log(clone)
console.log(funcionario)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA]
console.log(grupoFinal)