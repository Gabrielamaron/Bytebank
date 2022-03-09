import { listaUsuarios } from "./usuarios.js";

export function pegaUsuarioSelecionado (perfil) {
  for (let i = 0; i < listaUsuarios.length; i++) {
    let usuarioTeste = listaUsuarios[i];
    if (perfil == usuarioTeste.usuario) return usuarioTeste;
  };
};
