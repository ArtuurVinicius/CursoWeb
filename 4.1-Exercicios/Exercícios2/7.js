function entre(numero, minimo, maximo, inclusivo = true) {
    if (inclusivo) {
        if (numero >= minimo && numero <= maximo) {
            if (numero === minimo) {
                return 'Número é igual a mínimo';
            } else if (numero === maximo) {
                return 'Número é igual a máximo';
            } else {
                return 'Número está entre mínimo e máximo';
            }
        }
    } else {
        if (numero > minimo && numero < maximo) {
            return 'Número está entre mínimo e máximo';
        }
    }
    
    return 'Número não está entre mínimo e máximo';
}

console.log(entre(5, 1, 50, true));
console.log(entre(15, 20, 35));