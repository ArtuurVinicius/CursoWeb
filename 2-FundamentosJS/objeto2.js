console.log(typeof Object)
console.log(typeof new Object)
// a instancia de uma função é um objeto
const cliente  = function() {}
console.log(typeof cliente)
console.log(typeof new cliente)

class produto {} // funciona como se fosse um atalho
console.log('produto: ', typeof produto)
console.log('new produto: ', typeof new produto())

// em JS a função podem ter atributos e comportamentos e podem ser instanciadas