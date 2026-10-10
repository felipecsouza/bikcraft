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
