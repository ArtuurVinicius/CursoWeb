// trabalha com valores
for (let letra of "cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

for (let i in assuntosEcma) { // trabalha com índices
    console.log(i)
}

for (let i of assuntosEcma) { // trabalha com os valores do índice
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promisse', { abordado: false }]
])

for (let i of assuntosMap) {
    console.log(i)
}

for (let i of assuntosMap.keys()) {
    console.log(i)
}

for (let i of assuntosMap.values()) {
    console.log(i)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log | (ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let i of s) {
    console.log(i)
}