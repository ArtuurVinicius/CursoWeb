const peso1 = 1.0;
const peso2 = Number('2.0'); // podemos atribuir um valor a variavel dessa forma tambem

console.log(peso1, peso2)
// mesmo sendo declarado com ponto flutuante, o tipo da variavel é integer, pois nao é um numero quebrado
console.log(Number.isInteger(peso1)) 

const n1 = 9.789
const n2 = 6.783

const total = n1 * peso1 + n2 * peso2
const media = total / (peso1 + peso2)

// cada tipo de dado tem suas funções
console.log(media.toFixed(2)) // mostrar 2 casas depois do ponto flutuante
console.log(media.toString(2)) // passa pra string

// numnber = tipo de dado
// Number = função
