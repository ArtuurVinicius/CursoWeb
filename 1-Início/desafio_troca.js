// trocar os valores das variaveis
let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

[a,b] = [b,a] // dessa forma tambem funciona

console.log(a)
console.log(b)