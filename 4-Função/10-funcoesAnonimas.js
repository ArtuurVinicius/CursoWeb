const soma = function (x,y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a,b))
}
imprimirResultado(3,4)
imprimirResultado(3,4, function (x,y) { // passando função anonima como parâmetro
    return x - y
})

imprimirResultado(3,4, (x,y) => x * y) // passando arrow function como parametro

const pessoa = {
    falar: function() {
        console.log('Olá') // função anonima como atributo de um obj
    }
}

// const pessoa = {
//     falar() {
//         console.log('Olá') // função anonima como atributo de um obj
//     }
// } a função tambem pode ser declarada assim

pessoa.falar()