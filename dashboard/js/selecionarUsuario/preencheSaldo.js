export function preencheSaldo(saldo) {
  const campoSaldoUsuario = document.getElementById("saldoUsuario");
  campoSaldoUsuario.innerHTML = "Saldo: R$" + saldo;
};