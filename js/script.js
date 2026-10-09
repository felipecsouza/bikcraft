// ================================== HEADER - Ativar link menu
const navList = document.querySelectorAll(".header__menu a");

navList.forEach((link) => {
  link.classList.toggle(
    "header__ativo",
    link.pathname === location.pathname ||
      (link.pathname.endsWith === "/" &&
        location.pathname.endsWith === "index.html"),
  );
});

// =============================== ORÇAMENTO - Ativar item do orçamento
const parametros = new URLSearchParams(location.search);

parametros.forEach((parametro) => {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
});

// ======================================== SEGURO - Caixa Pergunts Frequentes
const perguntas = document.querySelectorAll(".perguntas__lista > div");

perguntas.forEach((item) => {
  const resposta = item.querySelector("dd");
  const seta = item.querySelector("img");
  if (resposta && seta) {
    item.addEventListener("click", () => {
      const ativa = resposta.classList.toggle("resposta-ativa");
      seta.classList.toggle("gira-seta");
      resposta.ariaHidden = ativa ? false : true;
    });
  }
});
