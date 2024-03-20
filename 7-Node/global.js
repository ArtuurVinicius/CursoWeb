// console.log(global)
global.minhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sim'
})
// qualquer outro arquivo terá acesso a esse objeto