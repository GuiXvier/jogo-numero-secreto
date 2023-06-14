function verificaSeOchutePossuiUmValorValido(chute){
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        console.log('Valor inválido');
    }

    if (numeroForMaiorOuMenorQueValorPermitdo(numero)){
        console.log(`valor inválido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitdo(numero){
    return numero > maiorValor || numero < menorValor;
}