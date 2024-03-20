// Função em JS é First-Class Object (citizen)
// Higher-order function

// criar função de forma literal
function fun1() { } // o bloco é obrigatório na função

// Armazenar uma funcção em uma variável
const fun2 = function () {} // -> função anônima

// armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](10,10)) // pega a primeira função

// armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () { return 'Falei'}
console.log(obj.falar())

// passar função como parametro

function run(fun1) {
    fun1()
}

run(function () {console.log('Running...')})

// Uma função pode retornar / conter outra função
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(6) //parâmetros das 2 funções
const cincoMais = soma(5,1)
cincoMais(9) // outra forma de atribuir parametros às duas funções