// Filter filtra um array com base em algum critério
const produtos = [
    {nome: 'Notebook', preco: 3000, fragil: true},
    {nome: 'iPad', preco: 3500, fragil: true},
    {nome: 'Copo', preco: 15, fragil: true},
    {nome: 'Copão', preco: 10, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))