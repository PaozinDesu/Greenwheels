var emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

let campos = ['nome', 'email', 'menssagem'];

for (i = 0; i < campos.length; i++) {
    let input = document.getElementById(campos[i]);
    let label = document.querySelector('label[for="' + campos[i] + '"]');

        input.addEventListener('focus', function () {
            label.classList.add('required-popup')
        })

        input.addEventListener('blur', function () {
            label.classList.remove('required-popup')
        })

    if (i == 1) {
        input.addEventListener("change", function (e) {
            let valor = e.target.value
            if (!emailPattern.test(valor)) {
                input.classList.remove('correct');
                input.classList.add('error');
                texto.innerText = 'Email invalido'
                texto.classList.add('visible');
            }
            else {
                input.classList.remove('error');
                texto.classList.remove('visible');
                input.classList.add('correct');
            }
        })
    }
    else {
        input.addEventListener("change", function (e) {
            let valor = e.target.value
            if (valor.length < 5) {
                input.classList.remove('correct');
                input.classList.add('error');
                texto.innerText = 'Precisa ter ao menos 5 caracteres'
                texto.classList.add('visible');
            }
            else {
                input.classList.remove('error');
                texto.classList.remove('visible');
                input.classList.add('correct');
            }
        })
    }
}