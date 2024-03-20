const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem CallBack
const notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7){
    notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com CallBack
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7 // se o resultado for true, ele acrescenta o valor ao array notasBaixas
                    // se o resultado for false, ele nao acrescenta nada
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter( nota => nota < 7) // usando arrow function
console.log(notasBaixas3)