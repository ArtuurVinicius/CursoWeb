// TODA FUNÇÃO TEM O METODO .PROTOTYPE
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Adicionando método reverse ao String.prototype
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
//inverte a string
console.log('trakinas'.reverse())

// Adicionando o método first ao Array.prototype
Array.prototype.first = function() {
    return this[0]
}
// mostra o primeiro indice do array
console.log([0,9,8,7,6,5].first())

// sobescrevendo o comportamento de toString
String.prototype.toString = function() {
    return 'ja era'
}
//EVITAR!!
console.log('atumalaca'.reverse())