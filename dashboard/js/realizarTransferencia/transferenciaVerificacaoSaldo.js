export function transferenciaVerificacaoSaldo(valor, saldo, campoMensagemErro) {
  if ( valor == "") {
    campoMensagemErro.innerHTML = "Insira o valor da TransferĂȘncia";
    return false;
  }
  if (valor > saldo) {
    campoMensagemErro.innerHTML = "Saldo insuficiente";
    return false;
  } else {
    campoMensagemErro.innerHTML = "";
    return true;
  };
}
