//1
let desafio = document.querySelector('h1');
desafio.innerHTML = "Hora do Desafio";

//2
function verificarClick(){
    console.log('O botão foi clicado');
}
//3
function verificarJS(){
    alert('JavaScrip é Foda');
}

//4
function verificarCidade(){
    let cidade = prompt('Diga o nome de uma cidade?');
    alert(`Passei por ${cidade} e lembrei de você`);
}

//5
function verificarSoma() {
    let primeiroNumero = parseInt(prompt('Diga um número'));
    let segundoNumero = parseInt(prompt('Diga outro número'));
    let resultado = primeiroNumero + segundoNumero
    alert(`A soma entre ${primeiroNumero} e ${segundoNumero} é igual a ${resultado}`);
}