function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // se o primeiro for true, ele retorna true logo
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv30 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv30 = trabalho1 != trabalho2
    const saudavel = !comprarSorvete // operador unario

    return {comprarSorvete, comprarTv50, comprarTv30, saudavel} // chave será o proprio nome da variavel
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))