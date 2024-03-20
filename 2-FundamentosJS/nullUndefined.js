let nu; // quando uma variavel nao é inicializada ela é do tipo undefined
console.log(typeof nu)
let nulo = null; // ausencia de valor
// console.log(nulo.toString()) nao roda pq é nulo

const produto = {}
console.log(produto.preco) // preco undefined
produto.preco = undefined
console.log(produto)
// VARIAVEIS COM VALORES PRIMITIVOS NÃO APONTAM PRO MESMO ENDEREÇO DE MEMÓRIA
// Atribuição por valor: tipos primitvos de dados
// Atribuição por referência: objetos, funções.
// Na atribuição por referencia, quando voce muda um valor de uma variavel a outra tambem sente  a diferença.
/*
    let a = {}
    let b = a  Nesse caso, ambas estao apontando pro mesmo objeto

    let a = 10
    let b = a Nesse caso, cada um esta apontando pra endereços de memorias diferentes
*/
