// Concat serve para concatenar arrays
// Não altera o array original, mas gera um novo
const filhas = ['Waleska', 'Cibalena']
const filhos = ['Voxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Elaine')
console.log(todos)

console.log([].concat([1,2],[3,4],5, [[6,7]]))