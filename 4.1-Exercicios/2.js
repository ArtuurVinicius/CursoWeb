function triangulo(ladosIguais) {
    if(ladosIguais == 3) {
        console.log('Equilátero')
    } else if(ladosIguais == 2) {
        console.log('Isósceles')
    } else if(ladosIguais == 0) {
        console.log('Escaleno')
    }
}
triangulo(3)