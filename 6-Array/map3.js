Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 20}',
    '{"nome": "Kit de lápis", "preco": 14}',
    '{"nome": "Caneta", "preco": 2}',
]

const obj = json => JSON.parse(json) // transforma o array em objeto
const preco = produto => produto.preco // filtra apenas o preco dele

const resultado = carrinho.map2(obj).map2(preco)
console.log(resultado)