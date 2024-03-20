const pessoa = {
    nome: 'ana',
    idade: 15,
    peso: 74,
    endereco: {
        numero: 24,
        complemento: 'etc'
    }
}

const { nome, idade } = pessoa // extrai nome e idade do objeto pessoa 
console.log(nome,idade)

const { nome: n, idade: i} = pessoa // extrai nome e idade e armazena em variaveis com nomes n e i

const { sobrenome, humor = true} = pessoa // define valor padrao pra variavel extraida
console.log(sobrenome, humor)

const { endereco: {numero, complemento, cep} } = pessoa // acessa atributos do objeto dentro de pessoa
console.log(numero, complemento, cep)

// const { conta: { ag, num} } = pessoa o caminho ate o  atributo tem que estar livre, só o ultimo dado pode ser 
// console.log(num, ag) null ou undefined