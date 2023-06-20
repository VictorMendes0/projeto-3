$(document).ready(function(){
    $('.product-list-promo').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome!',
            telefone: 'Seu numer é muito importante',
            email: 'Seu email é muito importante!',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})

var buttons = document.querySelectorAll('.nav-link');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        // LEMBRAR remove a classe "d-none" das abas correspondentes
        var target = this.getAttribute('data-bs-target');
        var tabPane = document.querySelector(target);
        tabPane.classList.remove('d-none');
    });
}