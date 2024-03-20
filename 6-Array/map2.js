// Exibir apenas o preco
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 20}',
    '{"nome": "Kit de lápis", "preco": 14}',
    '{"nome": "Caneta", "preco": 2}',
]

const obj = json => JSON.parse(json) // transforma o array em objeto
const preco = produto => produto.preco // filtra apenas o preco dele

const resultado = carrinho.map(obj).map(preco)
console.log(resultado)