import { trocaUsuario } from "./trocaUsuario.js";

export function verificaUsuarioSelecionado(usuario) {
  const perfil = usuario.id;
  trocaUsuario(perfil);
}