// armazenando função em uma variável
const imprimir = function (a,b){
    console.log(a+b)
}

imprimir(2,3)

// arrow function

const soma = (a,b) => { return a + b }
// retorno implícito
const subtracao = (a,b) => a - b // quando a função nao tem chaves as instruções ficam apenas em uma linha
// se tiver so um parametro pode remover os parenteses

console.log(subtracao(28,9))