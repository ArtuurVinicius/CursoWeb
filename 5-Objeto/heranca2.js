//cadeia de protótipos (prototype chain)
Object.prototype.at0 = '0' // evitar
const avo = { at1: 'A'}
const pai = {__proto__: avo, at2:'B', at3: 'D'}
const filho = {__proto__: pai, at3:'C'} // o at3 de filho sombreou o at3 do pai

console.log(filho.at1)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 // sombreamento ou shadowing
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status}` // super vai chamar o método do prototipo
    }
}

Object.setPrototypeOf(ferrari, carro) // estabelece uma relação de prototipos entre 2 objetos
//ferrari terá carro como prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo) // mesmo mostrando apenas os atributos e funções de volvo, ele ainda tem acesso às funções de seu prototipo

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())