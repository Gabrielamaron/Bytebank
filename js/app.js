import { valida } from "./main.js";
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {

  if(input.dataset.tipo === "cpf") {
    input.addEventListener("keyup", function() {
      mascaraCpf(input);
    })
  }

  if(input.dataset.tipo === "cep") {
    input.addEventListener("keyup", function() {
      mascaraCep(input)
    })
  }

  input.addEventListener("blur", (evento) => {
    valida(evento.target);
  });
})

function mascaraCpf(input) {
  let cpf = input.value;
  if ( cpf.length == 3 || cpf.length == 7) {
     cpf += "."
  }
  if (cpf.length == 11) {
    cpf += "-"
  }
  if (cpf.length >= 14) {
    cpf = cpf.substr(0,14)
  }
  document.getElementById("cpf").value = cpf;
}
function mascaraCep(input) {
  let cep = input.value;
  if (cep.length == 5) {
    cep += "-";
  }
  if(cep.length > 9) {
    cep = cep.substr(0,9);
  }
  document.getElementById("cep").value = cep;
}

  













