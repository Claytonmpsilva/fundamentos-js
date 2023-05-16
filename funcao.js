//let x =""
//console.log(x)
//x = "oi";

function imprimirTexto(texto){
    console.log(texto)
}

imprimirTexto(soma());
imprimirTexto('outro texto')

// três formas de escrever funçãoes
function soma(){
    return  2 + 2;
}
///console.log(soma())

function comprimentar(){
    console.log("Oi gente!")
}
comprimentar()

function comprimentarPessoa(pessoa){
    console.log(`Oi, ${pessoa}!` )
}
comprimentarPessoa ("Thaina")