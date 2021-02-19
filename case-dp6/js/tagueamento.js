// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

/* Google Analytics */
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics_debug.js', 'ga');

window.ga_debug = { trace: true }; /* testes do analytics */

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

/* End Google Analytics */

function entre_em_contato() {
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
    window.open('http://www.dp6.com.br/contato/');
}

function download_pdf() {
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
    window.open('http://autos.dp6.com.br/autos_revista_vfinal.pdf');
}

function ver_mais_lorem() {
    ga('send', 'event', 'analise', 'ver_mais', 'lorem');
}
function ver_mais_ipsum() {
    ga('send', 'event', 'analise', 'ver_mais', 'ipsum');
}
function ver_mais_dolor() {
    ga('send', 'event', 'analise', 'ver_mais', 'dolor');
}


function get_nome() {
    var nome = formulario.nome;
    if (nome.value != ""){
        ga('send', 'event', 'contato', 'nome', 'preencheu');
    }
    
}
function get_email() {
    var email = formulario.email;
    if (email.value != " " || email.value.indexOf('@')!=-1 || email.value.indexOf('.')!=-1){
        ga('send', 'event', 'contato', 'email', 'preencheu');
    }
}
function get_telefone() {
    var telefone = formulario.telefone;
    if (telefone.value != "")  {
        ga('send', 'event', 'contato', 'telefone', 'preencheu');
    }
}

function validar_form() {
    var nome = formulario.nome;
    var email = formulario.email;
    var telefone = formulario.telefone;

    if (nome.value == "") {
        alert("Preencha o nome corretamente!");
        nome.focus();
        return false;    
    }

    if (email.value == " " || email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1) {
        alert("Preencha o campo e-mail corretamente!");
        email.focus();
        return false;
    }

    if (telefone.value == "") {
        alert("Telefone não informado!");
        telefone.focus();
        return false;
    }

    ga('send', 'event', 'contato', 'enviado', 'enviado');
    alert("Obrigado pelo seu contato!") 
    return true;
}

