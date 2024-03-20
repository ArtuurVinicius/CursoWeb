// var fica visivel para todo codigo, mesmo estando em um bloco de codigo
{
    {
        {
            {
                var sera = 'ola'
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 122
}
teste()
// console.log(local) var nao é visivel pra todo o codigo se estiver numa função. Ele nao tem escopo de bloco

var sera = 'rp' // VAR PODE SER SOBRESCRITA DESSA FORMA. CUIDADO!
console.log(sera)

// VAR PODE SER GLOBAL OU DE FUNCTION