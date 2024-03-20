const primeiroIndice = arrayString => arrayString[0]
const minuscula = letra => letra.toLowerCase()

// uma promise gera um único valor
// algo que vai ser devolvido no futuro
new Promise(function(resolve){
    resolve(['Ana', 'Jailson', 'Gomes', 'José'])
})  .then(primeiroIndice)// o resultado de valor passa a ser o indice 0
    .then(primeiroIndice)
    .then(minuscula)
    // .then(v => console.log(v))
    .then(console.log)//versao simplificada da linha 11