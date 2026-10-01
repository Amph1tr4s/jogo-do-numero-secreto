let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', "Jogo do Número Secreto");
    exibirTextoNaTela('p', "Escolha um número entre 1 e 10");
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ?'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto! Com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', "Acertou!!");
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela('h1', "Errrouuuuuuuu!!");
        exibirTextoNaTela('p', "O número secreto é maior do que o chute.");
    } else {
        exibirTextoNaTela('h1', "Errrouuuuuuuu!!");
        exibirTextoNaTela('p', "O número secreto é menor do que o chute.");
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function NovoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}