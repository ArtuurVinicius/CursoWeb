function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco:  49999, desc: 0.20}

// call e apply servem pra "aplicar" uma função a um determinado objeto
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// diretamente do call podemos passar os parametros que serao passados para a função getPreco
console.log(getPreco.call(carro, 0.17, '$'))
// o primeiro parametro é sempre o contexto, depois os parametros da função


// o primeiro parametro do apply é o contexto do objeto, depois um array com os parametros da função getPreco
console.log(getPreco.apply(carro, [0.17, '$']))
