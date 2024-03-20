// ES8
// Object.values pega todos os valores de um objeto
// Object.entries pegas todas as chaves e valores de um objeto em uma matriz
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.keys(obj))

// Melhores na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    idade: 15,
    ola() {
        return 'Oi ola'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'auau'
    }
}

console.log(new Cachorro().falar())