const escola = 'detesto'

console.log(escola.charAt(4))
console.log(escola.charCodeAt(4)) // mostra o valor do caracter na tabela ascii 
console.log(escola.indexOf('t')) // mostra em que índice está o T
console.log(escola.substring(1)) // vai imprimir na tela apartir do indice 1
console.log(escola.substring(0,3)) // vai imprimir na tela indices 0, 1 e 2
console.log('Eu '.concat(escola).concat(' a escola, é ruim demaize!')) // concatena
console.log(escola.replace(0, 'f'))

console.log('Ana,Artur,Edvânia'.split(',')) // transformaa string em um array 