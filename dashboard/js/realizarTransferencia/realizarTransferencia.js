
import { transferenciaOperacao } from "./transferenciaOperacao.js";
import { transferenciaVerificacaoSaldo } from "./transferenciaVerificacaoSaldo.js";
import { transferenciaVerificacaoUsuario } from "./transferenciaVerificacaoUsuario.js";

export function realizarTransferencia(usuarioSelecionado) {
  const valor = document.getElementById("valorTransferencia").value;
  const valorAtualizado = Number(valor);
  const usuarioTransferencia = document.getElementById(
    "usuarioTransferencia"
  ).value;
  const saldo = usuarioSelecionado.saldo;
  const saldoAtualizado = Number(saldo);
  const campoMensagemErro = document.getElementById("mensagemErro");


  if (
    !transferenciaVerificacaoUsuario(usuarioTransferencia, usuarioSelecionado, campoMensagemErro) ||
    !transferenciaVerificacaoSaldo(valorAtualizado, saldoAtualizado, campoMensagemErro)
  ) {
    return;
  }

  transferenciaOperacao(valorAtualizado, saldoAtualizado, usuarioTransferencia, usuarioSelecionado);
  
}
