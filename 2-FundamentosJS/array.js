const valores = [1,2,3,4,5]
console.log(valores[0], valores[4])
console.log(valores[7]) // retorna undefined, pq o indice nao existe
valores[5] = 6
console.log(valores)
console.log(valores.length) // tamanho do vetor

valores.push({id: 3}, false, null, 'aobamosss') // o bixo pega tudo

console.log(valores)
valores.pop()
console.log(valores) // tira o ultimo valor do array
delete valores[0] // outra forma de deletar valor do array
console.log(valores)
