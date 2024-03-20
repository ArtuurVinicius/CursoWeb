let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // ??

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)

comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) 
// se for uma função normal o this aponta pro global, se for arrow function ele aponta para a função
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) // objeto atribuido inicialmente ao this