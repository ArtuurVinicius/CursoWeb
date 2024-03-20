let a = 3 // fica no contexto apenas do arquivo

global.b = 123 // fica no contexto de global

this.c = 8 // fica no contexto do this

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca: sem let e var. Variável global
abc = 3 // nunca fazer isso!!!
console.log(global.abc)

// SEMPRE ENTENDER O RUNTIME, SE ESTÁ RODANDO JS NA WEB OU NO NODE
// FUGIR SEMPRE QUE POSSÍVEL DO ESCOPO GLOBAL