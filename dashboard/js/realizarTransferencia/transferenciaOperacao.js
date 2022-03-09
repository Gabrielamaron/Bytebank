import { inserirHistorico } from "../historico/inserirHistorico.js";
import { preencheNome } from "../selecionarUsuario/preencheNome.js"
import { preencheSaldo } from "../selecionarUsuario/preencheSaldo.js";
import { pegarObjeto } from "./pegarObjeto.js";

export function transferenciaOperacao(valor, saldo, usuarioTransferencia, usuarioSelecionado) {
  const objetoUsuarioTransferencia = pegarObjeto(usuarioTransferencia);
  

  const somaRecebimento = Number(objetoUsuarioTransferencia.saldo) + (valor);
  const somaRecebimentoAtualizado = Number(somaRecebimento).toFixed(2);
  const subtracaoTransferencia = saldo - valor;
  const subtracaoTransferenciaAtualizado = Number(subtracaoTransferencia).toFixed(2);

  

  objetoUsuarioTransferencia.novoSaldo(somaRecebimentoAtualizado);
  usuarioSelecionado.novoSaldo(subtracaoTransferenciaAtualizado);



  preencheNome(usuarioSelecionado.nome);
  preencheSaldo(subtracaoTransferenciaAtualizado);
  inserirHistorico(usuarioSelecionado, valor, objetoUsuarioTransferencia);
}
