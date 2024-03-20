// contexto léxico : em que local físico do código o nome da variavel foi definido
const saudacao = 'fala' // contexto léxico 1

function exec() {
    const saudacao = 'opa' // contexto léxico 2
    return saudacao // os nomes de const sao iguais, mas nao geram conflitos pq estao em contextos diferentes
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 22,
    peso: 90,
    endereço: {
        logradouro: 'rua aleatoria',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)