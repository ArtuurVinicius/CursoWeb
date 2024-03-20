const imprimirResultado = function(nota){
    if(nota >= 7) {
        console.log('Aproved!')
    } else {
        console.log('Reproved!')
    }
}

imprimirResultado(5)
imprimirResultado('opa') // JS entende que uma string é menor que 7 