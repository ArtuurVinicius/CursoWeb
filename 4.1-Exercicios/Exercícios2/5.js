function maiorIgual(m, n){
    if(m < n){
        console.log(n, 'é o maior número')
    }else if(n < m){
        console.log(m, 'é o maior número')
    } else if(n == m){
        console.log('m e n são iguais')
    }
}

console.log(maiorIgual(5,3))
console.log(maiorIgual(150,200))