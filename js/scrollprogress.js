window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  progressbar = document.querySelector('.progress-bar');
  btnInicio = document.querySelector('.btn-inicio');

  progressbar.style.setProperty('--progresso', scrolled);
  if (scroll = null || scrolled < 5) {
    btnInicio.style.setProperty('display', 'none');
  } else {
    btnInicio.style.setProperty('display', 'block');
  }
}
