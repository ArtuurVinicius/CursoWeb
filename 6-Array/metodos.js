const pilotos = ['Vettel', 'Allonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no primeiro indice do array
console.log(pilotos)

// splice adiciona e remove elementos

pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const alguns = pilotos.slice(2) // gera um novo array
console.log(alguns)

const alguns2 = pilotos.slice(1, 4) // ele nao pega o indice 4. Apenas do 1 ao 3
console.log(alguns2)