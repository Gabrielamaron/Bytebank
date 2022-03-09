export function preencheNome(nome) {
  const campoNomeUsuario = document.getElementById("nomeUsuario");
  campoNomeUsuario.innerHTML = "Olá " + nome;
};