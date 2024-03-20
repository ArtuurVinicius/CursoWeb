// closure é o escopo criando quando uma função é declarad
// esse escopo permite a função acessar e manipular variáveis externas à função

// closure em ação

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())