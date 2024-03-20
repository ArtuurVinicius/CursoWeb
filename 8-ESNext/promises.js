function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // resolve aceita apenas 1 parâmetro
        }, segundos * 1000)
    })
}
//resolve quando uma promessa é atendida / resolvida e reject quando ela é rejeitada

falarDepoisDe(3, 'Zammnn')
    .then(frase => frase.concat('!!!!!'))
    .then(outra => console.log(outra))
    .catch(e => console.log(e)) // catch para tratar erro em promises