function soma(numero1, numero2){
    return numero1 + numero2;
}
console.log(soma(5, 5))
console.log(soma(-1, -1))
console.log(soma(10, 30))

// parâmetros x argumento
// ordem dos parâmetros 


function texto(texto1, texto2){
    return texto1 + texto2;
}

console.log(texto("meu nome e"," Clayton"))
console.log(texto("Clayton", " e neu nome "))

function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 4),soma(5,5)))
