// sempre deve-se usar await em uma função que irá retornar uma promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(2000)
    .then(() => console.log('executando promise'))
    .then(esperarPor)
    .then(() => console.log('executando promise'))
    .then(esperarPor)
    .then(() => console.log('executando promise'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    let valor = await retornarValorRapido( )

    await esperarPor(2000)
    console.log(`Async/await ${valor}`)

    await esperarPor(2000)
    console.log(`Async/await ${valor + 1}`)
    
    await esperarPor(2000)
    console.log(`Async/await ${valor + 2}`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()
