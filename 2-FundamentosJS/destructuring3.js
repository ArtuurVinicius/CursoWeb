function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 40})) // gera um numero aleatorio entre 40 e 50 
console.log(rand({})) // se passar um objeto vazio o numero varia entre 0 e 100