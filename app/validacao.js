function verificaSeOchutePossuiUmValorValido(chute){
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroForMaiorOuMenorQueValorPermitdo(numero)){
        elementoChute.innerHTML += `<div>valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitdo(numero){
    return numero > maiorValor || numero < menorValor;
}