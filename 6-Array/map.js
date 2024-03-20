// map serve pra transformar um array com os dados modificados / transformados
// map gera um novo array, não modifica o array atual
const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
    return e * 2
})
// esse map multiplica por 2 os conteudos do array
console.log(resultado)

const somar10 = e => e + 10
const triplo = e => e * 3
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(somar10).map(triplo).map(dinheiro)
console.log(resultado)
// soma com 10, multiplica por 3 e transforma em reais