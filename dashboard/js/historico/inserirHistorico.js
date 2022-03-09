import { registraTransferencia } from "./registraTransferencia.js";
import { verificacaoHistorico } from "./verificacaoHistorico.js";

export function inserirHistorico(
  usuarioSelecionado,
  valor,
  objetoUsuarioTransferencia
) {
  const historico = document.getElementById("historico");
  const colecaoFilhos = historico.childNodes;
  verificacaoHistorico(colecaoFilhos);
  registraTransferencia(
    usuarioSelecionado,
    valor,
    objetoUsuarioTransferencia,
    colecaoFilhos,
    historico
  );
}
