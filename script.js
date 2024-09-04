var emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

let campos = ['nome', 'email', 'menssagem'];

 for (i = 0; i < campos.length; i++) {
        let input = document.getElementById(campos[i]);
        let label = document.querySelector('label[for="' + campos[i] + '"]');
        let texto = document.getElementById(campos[i] + "-helper");
    
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

    function validar() {
        let emailPattern2 = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        let email = document.getElementById('email');
        let nome = document.getElementById('nome');
        let menssagem = document.getElementById('menssagem');
        let aviso = document.getElementById('aviso');
        let menssagemAviso = document.getElementById('menssagemAviso');

        if (nome.value.length < 5) {
            aviso.style.display = 'flex';
            menssagemAviso.innerText = 'Preencha o campo nome corretamente!'
            document.body.style.position = "fixed";
            return false;
        }
        else if (emailPattern2.test(email)) {
            aviso.style.display = 'flex';
            menssagemAviso.innerText = 'Preencha campo email corretamente!'
            document.body.style.position = "fixed";
            return false;
        } 
        else if (menssagem.value.length < 10){
            aviso.style.display = 'flex';
            menssagemAviso.innerText = 'A mensagem tem que ter no menino 10 caracteres!'
            document.body.style.position = "fixed";
            return false;
        }
        else{
            return true;
        }
    
}
function fechar() {
    let aviso = document.getElementById('aviso');
    aviso.style.display = 'none';
    document.body.style.position = "relative";
}