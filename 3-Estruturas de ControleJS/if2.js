function teste1(num) {
    if(num > 7)
        console.log(num) // apenas essa sentença de codigo esta associada ao if
    
    console.log('Final') // se o if tiver mais de uma sentença de codigo, é necessario chaves {}
} // como a segunda sentença esta fora do if, ela sempre é executada

teste1(6)
teste1(9)

function teste2(num) {
    if (num > 7); {  // esse if nao faz nada. Não usar ; em estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)