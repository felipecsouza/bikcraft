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
const btnsPerguntas = document.querySelectorAll(".perguntas__lista button");

function ativaResposta(evento) {
  const pergunta = evento.currentTarget;
  const resposta = document.getElementById(
    pergunta.getAttribute("aria-controls"),
  );

  if (!resposta) return;

  const ativa = resposta.classList.toggle("resposta-ativa");
  pergunta.ariaExpanded = ativa;
  resposta.ariaHidden = !ativa;
}

btnsPerguntas.forEach((btn) => btn.addEventListener("click", ativaResposta));

// ====================== GALERIA BICICLETAS INTERNA
const btnsImg = document.querySelectorAll(".nimbus__fotos button");
const galeria = document.querySelector(".nimbus__fotos");
const desktop = matchMedia("(min-width: 900px)");

function trocaImagem(event) {
  if (!desktop.matches) return;
  galeria?.prepend(event.currentTarget);
}

btnsImg.forEach((btn) => {
  btn.addEventListener("click", trocaImagem);
});

// =========================================== ATIVA SIMPLE-ANIME
if (window.SimpleAnime) {
  new SimpleAnime();
}
