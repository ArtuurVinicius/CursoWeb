function criarProduto(nome, preco) {
    return {
        nome, // nao precisa colocar nome: nome
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Anel', 300))
console.log(criarProduto('GPU', 1399))