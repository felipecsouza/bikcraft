// ================================== HEADER
const navList = document.querySelectorAll("header nav .header__menu a");
const paginaAtual = window.location.pathname;

// navList.forEach(function (link) {
//   const linkLimpo = link.href.replace(/\/$/, "");
//   const paginaAtualLimpa = paginaAtual.replace(/\/$/, "");

//   if (linkLimpo === paginaAtualLimpa) {
//     link.classList.add("header__ativo");
//   }
// });

navList.forEach((link) => {
  if (
    link.pathname === paginaAtual ||
    (link.pathname === "/" && paginaAtual === "index.html")
  ) {
    link.classList.add("header__ativo");
  }
});
console.log("teste");
