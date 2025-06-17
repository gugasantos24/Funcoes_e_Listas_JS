// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Exibir texto na tela 
function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entro 1 a 10');
}

exibirMensagemInicial();

//Chamando a função
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entro 1 a 10');

//Verificar chute e número de tentativas
function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
    exibirTextoNaTela('p', mensagemTentativas);
    //Removendo o atributo que desativa o botão
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto){
      exibirTextoNaTela('p', 'O numero secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O numero secreto é maior');
    }
    tentativas ++;
  }
}
//Função para criar números aleatórios entre 1 e 10 
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial(); 
  document.getElementById('reiniciar').setAttribute('disabled',true); 
}