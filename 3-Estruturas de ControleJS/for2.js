const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { // mostra somente o índice do array, não o conteúdo
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 74
}

for(let a in pessoa) { // para cada atributo em pessoa, ele imprime a chave e o valor dele.
    console.log(`${a} = ${pessoa[a]}`)
}

// colocar let para que esse índice do for fique apenas em escopo local