//1 IMC = peso /(altura * altura)
function calcularImc(peso, altura){
    return peso / (altura * altura);
}

calcularImc(66, 1.75);

//2
function exibirFatorial(numero) {
    if (numero === 0 || numero ===1){
        return 1;
    }
    let fatorial = 1 
    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }

    return fatorial;
}

//3
function converterDolar(valorDolar){
    let cotacaoDolar = 4.80;
    let valorReal = valorDolar * cotacaoDolar;
    
    console.log(valorReal);
}


//4 
function medidaSala(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`A area é do retangulo é ${area}`);
    console.log(`O perimetro é do retangulo é ${perimetro}`);

}

//5
function medidaCirculo(raio){
    let pi = 3.14;
    let area = (2 * pi) * (raio * raio);
    let perimetro =  2 * (pi * raio);

    console.log(`A área do circulo é ${area}`);
    console.log(`O perimetro do circulo é ${perimetro}`);

}

//6
function exibirTabuada(numero){
    for (let i = 1; i <= 10; i++);
    let resultado = numero * i;

    console.log(`A tabuada do ${numero} x ${i} é ${resultado}`);
}
