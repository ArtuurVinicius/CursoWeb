const moduloA = require('../../moduloa') // pode-se chamar o arquivo com letras minusculas
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.bomdia)

const c = require('./pastaC/index')
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end
// }).listen(8080)