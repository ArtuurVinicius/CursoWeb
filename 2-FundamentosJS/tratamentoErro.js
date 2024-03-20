function tratarErro(erro) {
    throw new Error('...')
    throw 10
} 
function imprimirNome(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!!!')
    } catch(e) {
        tratarErro(e)
    } finally {
        console.log('finally sempre é executado!!!!')
    }
}

const obj ={ name: 'roberto' }
console.log(imprimirNome(obj))