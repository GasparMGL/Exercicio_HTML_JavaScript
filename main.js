const form = document.getElementById('form-login');
const user = document.getElementById('id-login');
const password = document.getElementById('senha-login');
let formEValido = false;

function validarUsuario(usuarioValido){
    return usuarioValido = user.value.length === 4;
}

function validarSenha(senhaValida){
    return senhaValida = password.value.length >= 6;
}


user.addEventListener('keyup', function(e){
    usuarioValido = validarUsuario(e.target.value);

    if(!usuarioValido){

        document.querySelector('.id-error').style.display = 'block';
    } else {

        document.querySelector('.id-error').style.display = 'none';
    }
});

password.addEventListener('keyup', function(e){
    senhaValida = validarSenha(e.target.value);

    if(!senhaValida){

        document.querySelector('.senha-error').style.display = 'block';
    } else {

        document.querySelector('.senha-error').style.display = 'none';
    }
});



form.addEventListener('submit', function(e) {
    e.preventDefault();
    usuarioValido = validarUsuario();
    senhaValida = validarSenha();

    if (usuarioValido && senhaValida) {
        formEValido = true;
    } else {
        formEValido = false;
    }

    if (formEValido) {
        alert("tudo certo");
    } else {
        alert("algo errado");
    }
});
