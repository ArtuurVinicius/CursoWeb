function soma(a,b){
    console.log(a + b)
}

soma(56, 34)
soma(2) // dessa forma ele soma o 2 com undefined, dando um Not a Number (NaN)
soma(2,3,4,5,6,7) // dessa forma ele soma os dois primeiros e os demais ele descarta

console.log('==============================================')

function imprimir(a, b = 1){
    return a + b
}
console.log(imprimir(10, 5))
console.log(imprimir(10))
//se o segundo parametro nao for passado, é usado o valor padrao declarado na função