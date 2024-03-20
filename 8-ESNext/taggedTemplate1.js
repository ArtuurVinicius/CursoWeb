// tagged templates - processa o template string dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}!`)
// partes: string vazia + está + string vazia
//valores: aluno e situacao
//???