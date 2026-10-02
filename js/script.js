// ================================================= Header
const navList = document.querySelectorAll("header nav .header__menu a");
const paginaAtual = document.location.href;

navList.forEach(function (link) {
  const linkLimpo = link.href.replace(/\/$/, "");
  const paginaAtualLimpa = paginaAtual.replace(/\/$/, "");

  if (linkLimpo === paginaAtualLimpa) {
    link.classList.add("header__ativo");
  }
});
