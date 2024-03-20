function inverso(a){
    if(typeof a === 'boolean'){
        return !a
    } else if(typeof a === 'number'){
        return -a
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof parametro}`
    }
}

console.log(inverso(347))
console.log(inverso(true))
console.log(inverso(false))