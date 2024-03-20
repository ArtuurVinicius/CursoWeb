const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome:'Ana',
        nota: 9.8
    }]
},{
    nome: 'Turma 2',
    alunos: [{
        nome: 'rebeca',
        nota: 0
    },{
        nome: 'roberto',
        nota: 8.5
    }]
}]

const getNota = a => a.nota
const getNotasTurma = turma => turma.alunos.map(getNota)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

console.log([].concat([ 8.1, 9.8 ], [ 0, 8.5 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)