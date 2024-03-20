// em JS array é na verdade um objeto
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Irineu')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
// os indices 5 6 7 e 8 existem, mas sao undefined
console.log(aprovados)
aprovados.sort() // altera a ordem no array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
// splice adiciona elementos em um determinado indice
// remove elementos de um determinado indice
// remove e adiciona elementos ao mesmo tempo
aprovados.splice(1,1) // exclui 1 elementos a partir do indice 1 (carlos)

aprovados.splice(1, 1)
console.log(aprovados)

// um array constante nao tem seus indices constantes, so aponta pra um unico endereço de memoria