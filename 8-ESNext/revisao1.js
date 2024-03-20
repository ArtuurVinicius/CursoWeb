// let e const
{
    var a = 1
    let b = 2
    console.log(b)
}

console.log(a)

// Template String
const produto = 'Acer'
console.log(`${produto} NÃO é caro!`)

//Destructuring
const [l,e, ...tras] = 'cacetada hein amigo' // desestruturando uma string
console.log(l,e, ...tras)

const [x, , y] = [1,2,3] // desestruturando um vetor
console.log(x,y)

const { nome: n, idade: i} = { nome: 'eu', idade: 17} // desestruturando um objeto
console.log(i,n)