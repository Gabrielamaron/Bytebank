import { removerTexto } from "./removerTexto.js";

export function verificacaoHistorico(colecaoFilhos) {
  let listasItensFilhos = [];
  colecaoFilhos.forEach((item) => {
    if (item.tagName == "LI") {
      listasItensFilhos.push(item);
    }
  });
  listasItensFilhos.forEach((li) => {
    const listaClasses = li.classList.value;
    if (listaClasses.includes("historico__lista--fraco")) {
      removerTexto(historico, li);
    }
  });
}
