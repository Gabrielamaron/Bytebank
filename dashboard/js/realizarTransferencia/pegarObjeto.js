import { listaUsuarios } from "../usuarios.js";

export function pegarObjeto(usuarioTransferencia) {
  for (let i = 0; i < listaUsuarios.length; i++) {
    const usuario = listaUsuarios[i]
    const itemTeste = usuario.usuario;
    if ( itemTeste == usuarioTransferencia) {
      return usuario
    }
    
  }
}
