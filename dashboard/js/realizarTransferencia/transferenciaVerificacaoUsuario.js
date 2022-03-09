import { listaUsuarios } from "../usuarios.js";

export function transferenciaVerificacaoUsuario(
  usuarioTransferencia,
  usuarioSelecionado,
  campoMensagemErro
) {
  const listaPerfisUsuarios = listaUsuarios.map((usuario) => {
    return usuario.usuario;
  });

  if(usuarioTransferencia == usuarioSelecionado.usuario) {
    campoMensagemErro.innerHTML = "Transferências não podem ser realizadas entre usuários iguais!";
    return false;
  }

  if (!listaPerfisUsuarios.includes(usuarioTransferencia)) {
    campoMensagemErro.innerHTML = "Usuario não encontrado";
    return false;
  } else {
    campoMensagemErro.innerHTML = "";
    return true;
  };
}
