// objeto = coleção dinamica de pares chave / valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca'] = 'fenrer'
produto.preco = 120
console.log(produto)
delete produto.preco
delete produto.marca
console.log(produto)

const carro = {
    modelo: 'a4',
    valor: '120000',
    propietario: {
        nome: 'Raul',
        idade: '30',
        endereco: {
            rua: 'exemplo',
            numero: 58
        }
    }, 
    condutores: [{
        nome: "junior"
    }, {
        nome: "ana"
    }
],
    calcularSeguro: function(){
        //...
    }
}

console.log(carro)
carro.propietario.endereco.numero(76)
carro['propietario']['endereco']['rua'] = 'cacetada'
console.log(carro)