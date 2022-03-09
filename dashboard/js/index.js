import { verificaUsuarioSelecionado } from "./selecionarUsuario/verificaUsuarioSelecionado.js";
import { realizarTransferencia } from "./realizarTransferencia/realizarTransferencia.js";
import { pegaUsuarioSelecionado } from "./pegaUsuarioSelecionado.js";
import { pegaPerfil } from "./realizarTransferencia/pegaPerfil.js";

export const listaUsuariosRadio = document.getElementsByName("usuario");
const botaoTransferencia = document.getElementById("botaoTransferencia");

listaUsuariosRadio.forEach( usuario => usuario.onclick = function() {
  verificaUsuarioSelecionado(usuario);
}
);

botaoTransferencia.onclick = function() {
  const perfil = pegaPerfil();
  const usuarioSelecionado = pegaUsuarioSelecionado(perfil);
  realizarTransferencia(usuarioSelecionado);
};

