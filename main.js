const form = document.getElementById('form-login');
const user = document.getElementById('id-login');
const password = document.getElementById('senha-login');

function validarUsuario(usuario){
    return usuario.length === 4;
}

function validarSenha(senha){
    return senha.length >= 6;
}

user.addEventListener('keyup', function(e){
    const usuarioValido = validarUsuario(e.target.value);

    if(!usuarioValido){
        document.querySelector('.id-error').style.display = 'block';
    } else {
        document.querySelector('.id-error').style.display = 'none';
    }
});

password.addEventListener('keyup', function(e){
    const senhaValida = validarSenha(e.target.value);

    if(!senhaValida){
        document.querySelector('.senha-error').style.display = 'block';
    } else {
        document.querySelector('.senha-error').style.display = 'none';
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const usuarioValido = validarUsuario(user.value);
    const senhaValida = validarSenha(password.value);

    if (usuarioValido && senhaValida) {
        alert("Tudo certo");
    } else {
        alert("Algo esta errado, verifique!");
    }
});
