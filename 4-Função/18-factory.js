// Função factory é uma função que retorna um objeto
const prod1 = {
    nome: '...',
    preco: 45
}

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())