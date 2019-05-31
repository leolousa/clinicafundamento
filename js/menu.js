/* Controle do menu lateral*/
document.querySelector('.cabecalho__menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
};
document.querySelector('.cabecalho__menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};
function fechaMenu() {
    document.documentElement.classList.remove('menu-ativo');
}
document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};
