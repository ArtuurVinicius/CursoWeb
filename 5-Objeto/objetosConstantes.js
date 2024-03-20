// pessoa -> endereço de memoria -> {objeto}
const pessoa = { nome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

// pessoa <- 456 -> {...}
// pessoa = { nome = 'ana' }

Object.freeze(pessoa) // congela o objeto

pessoa.nome = 'Joao'
console.log(pessoa.nome)

const pc = Object.freeze({ nome: 'Mario'})
console.log(pc)