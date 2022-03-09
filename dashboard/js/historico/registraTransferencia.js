export function registraTransferencia(
  usuarioSelecionado,
  valor,
  objetoUsuarioTransferencia,
  colecaoFilhos,
  historico
) {
  const elementoReferencia = colecaoFilhos[0]
  const registroNovo = document.createElement("li");
  const conteudoNovo = document.createTextNode(
    `${usuarioSelecionado.nome} transferiu R$${valor} para ${objetoUsuarioTransferencia.nome}.`
  );

  registroNovo.appendChild(conteudoNovo);
  historico.insertBefore(registroNovo, elementoReferencia);
}
