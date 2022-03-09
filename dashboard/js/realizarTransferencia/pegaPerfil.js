import { listaUsuariosRadio } from "../index.js";

export function pegaPerfil() {
  for (let i = 0; i < listaUsuariosRadio.length; i++) {
    const usuarioTesteRadio = listaUsuariosRadio[i];
    if(usuarioTesteRadio.checked) {
      return usuarioTesteRadio.id;
    }
  }
}


