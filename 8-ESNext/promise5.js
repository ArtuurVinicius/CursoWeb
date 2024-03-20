function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.1)
    .then(v => `Valor: ${v}`) // ou console.log apenas
    .then(
        v => consol.log(v),
        // err => console.log(`Erro especifico: ${err}`)
        )
    .then(() => console.log('Quase fim'))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log('Fim'))