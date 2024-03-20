let boo = false
console.log(boo)
boo = true

let ativo = 1
console.log(!!ativo) // dessa forma, transformamos a variavel que era number em boolean

console.log('\nVERDADEIROS')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto aleatorio')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(ativo = true))

console.log('\n FALSOS')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(ativo = false))

console.log('\nFINALIZANDO')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'UAI') // como o nome esta vazio ele é falso, entao ele imprime o valor literal digitado
