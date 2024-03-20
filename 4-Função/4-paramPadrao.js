// estrategia 1 para gerar valor padrao
function soma(a,b,c) {
    a = a || 1
    b = b || 1 // se o valor inserido for igual a false, as variaveis recebem valor 1
    c = c || 1
    return a + b + c
} // essa forma é muito comum

console.log(soma(), soma(3), soma(1,2,3), soma(0,0,0))

//estrategia 2,3 e 4 para gerar valor padrao
function soma2(a, b, c) {       // se a for diferente de undefined, ele assume o proprio valor de a
    a = a !== undefined ? a : 1 // se a nao for diferente de undefined, ele assume valor 1
    b = 1 in arguments ? b : 1 // se em arguments houver indice 1, ele assume valor de b. Senao, assume valor 1 
    c = isNaN(c) ? 1 : c // se c nao é um numero ele assume valor 1, senao, assume valor de C   
    return a + b + c
} // C é a melhor forma de definir valor padrao alem do ES2015

console.log(soma2())
console.log(soma2(6))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))

// valor padrao do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3())
console.log(soma3(5))
console.log(soma3(7,1))
console.log(soma3(10,10,10))