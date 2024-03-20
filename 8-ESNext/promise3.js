function gerarNumerosEntre(min, max) {
    if(min > max){
        [max, min] = [min, max]
        // const [x, y] = a || min = x e max = y
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const random = parseInt(Math.random() * fator) + min
        resolve(random)
    })
}

gerarNumerosEntre(10, 30)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)