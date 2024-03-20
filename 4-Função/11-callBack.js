// Call Back = passar uma função que será chamada quando uma função acontecer
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`)
}
//forEach é uma função de todo array
fabricantes.forEach(imprimir())
// nesse caso, a função vai receber apenas o parametro nome, e parametro 'indice' é ignorado
// o parâmetro nome será os índices do vetor
fabricantes.forEach(fabricante => console.log(fabricante))
// 'fabricante' é na verdade cada índice do vetor

/* Esclarecendo dúvida
    A função de retorno de chamada passada para forEach sempre recebe três argumentos:
    1. O elemento atual do array.
    2. O índice desse elemento no array.
    3. O array completo que está sendo percorrido.

    Sempre esses 3 argumentos nessa mesma ordem.
*/