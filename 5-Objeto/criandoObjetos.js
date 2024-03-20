// usando a noração literal
const obj1 = {}

//Objeto em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object
console.log(obj2)

// funções construtoras
function produto(nome, preco, desc) {
    this.nome = nome
    this.getDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('caneta', '1.99', '0.10')
console.log(p1.getDesconto())

// função factory
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 3000, 5)
console.log(f1.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// uma forma famosa de criar objetos
const fromJSON  = JSON.parse("{'info': 'é um json'}")

console.log(fromJSON.info())