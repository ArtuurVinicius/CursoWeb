const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__) // mostra quem é o prototipo, ou objeto pai
console.log(ferrari.__proto__ === Object.prototype)

function meuobj() {}
console.log(typeof Object, typeof meuobj)
console.log(Object.prototype, meuobj.prototype)