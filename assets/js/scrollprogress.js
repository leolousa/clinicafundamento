window.onscroll = function() { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  progressbar = document.querySelector('.cabecalho__progress-bar');
  btnInicio = document.querySelector('.btn-inicio');
  progressbar.style.setProperty('--progresso', scrolled);

  // Exibe e esconde o botão para ir ao topo
  if (scroll = null || scrolled < 5) {
    btnInicio.style.setProperty('display', 'none');
  } else {
    btnInicio.style.setProperty('display', 'block');
  }


}
