let dobro = function(a) {
    return 2 * a
}

let dobro2 = a => 2 * a // return implicito

console.log(dobro2(Math.PI))

dobro = () => 'Olá'
dobro = _ => 'Olá' // dessa forma ela possui um parametro