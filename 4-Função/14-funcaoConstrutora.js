function Carro(maxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0
    //metodo publico
    this.acelerar = function () { // o this é responsável por tornar algo visivel para fora da função!
        if (velocidadeAtual + delta <= maxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = maxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)