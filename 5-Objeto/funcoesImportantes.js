const pessoa = {
    nome: 'Fulana',
    idade: 15,
    peso: 40
}

console.log(Object.keys(pessoa)) // pega todas as chaves do objeto
console.log(Object.values(pessoa)) // pega todos os valores do objeto
console.log(Object.entries(pessoa)) // arrays de chaves e valores

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'nascimento', {
    enumerable: true,
    writable: false,
    value: '01/12/2002'
})

pessoa.nascimento = '13/09/1945'
console.log(pessoa.nascimento)

// Object.assign ES2015
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
//cria um obj que é a concatenação de todos os objetos que voce escolher