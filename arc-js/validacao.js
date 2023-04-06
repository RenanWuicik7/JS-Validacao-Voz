function verificaValidacaoNumeral() {
    const numero = +chute;

    if(chuteForValido(numero)) {
        elementoChute.innerHTML += "<div class='div-comando'>Tipo de Chute Inválido. Tente Falar um numero</div>"
    }

    if(numeroMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div class='div-comando'>Chute ultrapassando numeros limites que são: ${maiorValor} e ${menorValor}. Tente falar um numero dentro dos limites.</div>`
    }

    if(numero == numeroSecreto) {
        document.body.innerHTML = `
            <h1 class="inicio_titulo">Você Acertou o Numero Secreto</h1>
            <h3 class="mensagem-resultado">O número secreto era ${numeroSecreto}!</h3>
            <button onclick='reiniciarJogo()' class='botão-reiniciar-jogo'>Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-wide-short"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-wide-short"></i></div>
        `
    }
}

function chuteForValido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}