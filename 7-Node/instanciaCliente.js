// node faz cache dos modulos
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() 
const contadorD = require('./instanciaNova')() 
// como a instancia nova retorna uma função, é necessário () para executá-la

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)