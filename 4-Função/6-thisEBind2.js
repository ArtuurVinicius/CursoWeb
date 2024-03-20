function Pessoa() {
    this.idade = 0

    const self = this // vai sempre apontar pra pessoa, diferente do this que pode variar
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa