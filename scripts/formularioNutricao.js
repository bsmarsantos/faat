function submitForm () {
    // Ver se os campos obrigatórios têm dados
    if (document.getElementById('formNome').value == '') {
        return '';
    }
    if (document.getElementById('formEmail').value == '') {
        return '';
    }
    if (document.getElementById('formDataNascimento').value == '') {
        return '';
    }
    if (document.getElementById('formContacto').value == '') {
        return '';
    }
    if (document.getElementById('formAltura').value == '') {
        return '';
    }
    if (document.getElementById('formPeso').value == '') {
        return '';
    }

    alert('Obrigado por ter responido ao questionário. Iremos entrar em contacto para a marcação da consulta de nutrição!');
    window.location.href = "/nutricao.html";
}