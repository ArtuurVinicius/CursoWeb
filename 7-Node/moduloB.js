let a = 2 // isso só é visível dentro deste módulo
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite!'
    }
}