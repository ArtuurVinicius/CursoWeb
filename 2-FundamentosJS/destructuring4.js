// REFAZENDO EXERCICIO DESTRUCTURING 3 MAS COM ARRAY
function rand([ min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    // se o min for maior que maximo, inverte os valores das variaveis
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
// console.log(rand()) se passar sem parametro nao funciona
