const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 101);
}

console.log(`Número secreto: ${numeroSecreto}`)