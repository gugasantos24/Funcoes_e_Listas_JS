//1.
function bemVindo(){
    console.log('Olá, mundo!');
}

bemVindo();


//2.
function recebeNome(nome){
    console.log(`Olá, ${nome}`);
}

recebeNome('Gustavo');


//3.
function recebeNumero(numero){
    return numero * 2;
}

let dobro = recebeNumero(2)
console.log(dobro);


//4.
function exibeMedia(a, b, c){
    return (a + b + c) / 3;
}

let media = exibeMedia(3, 7, 9);
console.log(media);


//5.
function exibeMaior(a, b){
    return a > b ? a : b;
}

let numeroMaior = exibeMaior(6, 19);
console.log(numeroMaior);


//6.
function exibeVezes(numero){
    return numero * numero;
}

let multi = exibeVezes(5);
console.log(multi);