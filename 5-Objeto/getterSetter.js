const sequencia = {
    _valor,
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
// com o _ antes do nome do atributo ele continua publico, mas isso indica que ele so deve ser
// acessado internamente

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)