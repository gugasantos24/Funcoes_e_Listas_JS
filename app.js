let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


//Exibir texto na tela 
function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
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
//Função para criar números aleatórios entre 1 e 10 e verificação se esta na lista.
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
 if (quantidadeDeElementosNaLista == numeroLimite) {
  listaNumerosSorteados = [];
 }
  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
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
