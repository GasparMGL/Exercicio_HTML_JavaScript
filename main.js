const form = document.getElementById('form-login');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const refCampoA = parseFloat(document.getElementById('campoA').value);
    const refCampoB = parseFloat(document.getElementById('campoB').value);
    

    const valorA = refCampoA;
    const valorB = refCampoB;

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
