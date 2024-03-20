// Object.preventExtensions
// Nao deixa o objeto ter seu numero de atributos aumentado
// Ainda é possível excluir atributos, mas nao adicioná-los

const produto = Object.preventExtensions({
    nome: 'bolacha', preco: '1.99', peso: '200'
})

console.log('Estensível:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.peso
console.log(produto)

// Object.seal
// Não é possivel adicionar ou excluir atributos. É possivel alterar valores dos atributos.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = objeto selado com valores constantes