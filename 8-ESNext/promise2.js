//setTimeout executa a função depois do tempo determinado
//setInterval executa a função periodicamente
// setTimeout(function(){
//     console.log('Executando a função')

//     setTimeout(function(){
//         console.log('Executando a função')
        
//         setTimeout(function(){
//             console.log('Executando a função')
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise')
            resolve('visshhh')
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)
    .then(esperarPor)
    .then(esperarPor)