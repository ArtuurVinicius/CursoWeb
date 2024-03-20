const nome = 'clarice'
console.log(`Olá ${nome} !`)
// template string considera quebra de linhas
const saudacao = `
    
    ${nome}!
`
console.log(saudacao)

console.log(`1 + 1 nao lê ${1 + 1}\n assim ele lê`)

const up = s => s.toUpperCase()

console.log(`Ei! ${up('cuidado!')}`) // template string pode chamar funções