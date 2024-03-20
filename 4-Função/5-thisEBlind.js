const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar
const falar = pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // sempre que chamar a função, o this sera o objeto dono da função
falarDePessoa()