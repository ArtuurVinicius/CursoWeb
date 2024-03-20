class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() { //falar é um método
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Maria')
p2.falar()