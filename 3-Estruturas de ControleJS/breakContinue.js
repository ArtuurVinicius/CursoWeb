const nums = [1,2,3,4,5,6,7,8,9,10]

// for (x in nums){ // break age no for, não no if
//     if (x == 5){ // for é o bloco mais proximo que ele interage
//         break
//     }
//     console.log(`Índice ${x} = ${nums[x]}`)
// }

for (y in nums){
    if (y == 5) { // se y for igual a 5, ele ignora o indice 5 e continua com o próximo
        continue
    }
    console.log(`Índice ${y} = ${nums[y]}`)
}

externo: // rótulo, relacionado com o primeiro for
for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3){
            break externo // só é possivel atribuir o break com o for mais externo através de um rótulo
        }
        console.log(`Par ${a}, ${b}`)
    }
}