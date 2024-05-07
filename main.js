const form = document.getElementById('form-login');
const refCampoA = document.getElementById('campoA');
const refCampoB= document.getElementById('campoB');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = refCampoA.value;
    const valorB = refCampoB.value;

    const avisoConfirmacao = `Tudo certo`;
    const avisoNegacao = `Corrija! O Campo B ${valorB} esta menor que o Campo A ${valorA}`;

    if (valorA <= valorB) {
        const containerAvisoConfirmacao = document.querySelector('.confirmacao');
        containerAvisoConfirmacao.innerHTML = avisoConfirmacao;
        document.querySelector('.confirmacao').style.display = 'block';
        document.querySelector('.negacao').style.display = 'none';
    } else {
        const containerAvisoNegacao = document.querySelector('.negacao');
        containerAvisoNegacao.innerHTML = avisoNegacao;
        document.querySelector('.confirmacao').style.display = 'none';
        document.querySelector('.negacao').style.display = 'block';
    }
});
