
import { preencheNome } from "./preencheNome.js";
import { preencheSaldo } from "./preencheSaldo.js";
import { pegaUsuarioSelecionado } from "../pegaUsuarioSelecionado.js";
export function trocaUsuario(perfil) { 
  const usuarioSelecionado = pegaUsuarioSelecionado(perfil);
  preencheNome(usuarioSelecionado.nome);
  preencheSaldo(usuarioSelecionado.saldo);
};
