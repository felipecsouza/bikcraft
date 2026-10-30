const form = document.querySelector("form");

function formEnviado(resposta) {
  if (resposta.ok) {
    form.innerHTML = "<p class="font-2-l">Mensagem enviada com sucesso.</p>";
  } else {
    form.innerHTML = "<p>Erro no envio da mensagem.</p>";
  }
}

function enviarForm(event) {
  event.preventDefault();
  const btn = document.querySelector("form button");
  btn.disabled = true;
  btn.textContent = "Enviando...";

  const data = new FormData(form);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formEnviado);
}

form.addEventListener("submit", enviarForm);
