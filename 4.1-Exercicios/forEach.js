const aprovados = ["Agata", "Aldo", "Daniel", "Raquel"]

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})// o 3 parametro é o proprio array

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)