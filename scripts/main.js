// Função que controla o som
function controlarSom(som) {
    if (som == 'off') {
        // Esconde o botão de som off
        document.getElementById('off').classList.add("escondido");
        document.getElementById('off2').classList.add("escondido");

        // Mostra o botão do som on
        document.getElementById('on').classList.remove("escondido");        
        document.getElementById('on2').classList.remove("escondido");     
        
        document.getElementById('audio').play();
    } else {
        // Esconde o botão de som on
        document.getElementById('on').classList.add("escondido");
        document.getElementById('on2').classList.add("escondido");

        // Mostra o botão do som off
        document.getElementById('off').classList.remove("escondido");        
        document.getElementById('off2').classList.remove("escondido");     
        
        document.getElementById('audio').pause();
    }
}

function controlarMenu(menu) {
    if (menu == 'fechado') {
        document.getElementById('menuFechado').classList.add('escondido');
        document.getElementById('menuAberto').classList.remove('escondido');
    } else {
        document.getElementById('menuAberto').classList.add('escondido');
        document.getElementById('menuFechado').classList.remove('escondido');
    }
}