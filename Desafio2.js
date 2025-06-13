//1.
function bemVindo(){
    alert('Olá, mundo!');
}

//2.
function recebeNome(){
    let nome = prompt('Diga sem nome');
    alert(`Olá, ${nome}`);
}

//3.
function recebeNumero(){
    let dobro = numero * 2;
    let numero = prompt('Diga um numero');
    alert(`o dobro do número que você digitou é ${dobro}`);
}

//4.
function exibeMedia(){
    let media = (n1 + n2 + n3) / 3;
    let n1 = prompt('Diga o primeiro número');
    let n2 = prompt('Diga o segundo número');
    let n3 = prompt('Diga o terceiro número');
    alert(`A media dos número fornecidos é ${media}`);
}

//5.
function exibeMaior(){
    let numero1 = prompt('Diga um número');
    let numero2 = prompt('Diga um segundo número');
} if (numero1 > numero2){
    alert(`o número ${numero1} é maior`);
} else {
    alert(`O número${numero2} é maior`);
}

//6.
function exibeVezes(){
    let multi = numero * numero;
    let numero = prompt('Diga um número');
    alert(`o Numero vezes ele mesmo é ${multi}`);
}
    