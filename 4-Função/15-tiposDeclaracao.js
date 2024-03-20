//function declaration
function soma(x,y){
    return x + y // dessa forma dá pra fazer hoisting na function
}

//function expression
const sub = function (x,y) {
    return x - y // dessa forma não da pra fazer hoisting na function
}

const mult = function mult(x,y) {
    return x * y // dessa forma não da pra fazer hoisting na function
}