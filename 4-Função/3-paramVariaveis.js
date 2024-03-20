function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i] // arguments armazena os parametros passados para a função
    }
    return soma
}
console.log(soma())
console.log(soma(7))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, ' Teste'))
console.log(soma(' aoba ', 'mossssss', ' Teste'))