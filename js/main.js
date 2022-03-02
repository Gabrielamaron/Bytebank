export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if(validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
  ifsValidacao(input, tipoDeInput)
}
const mensagensDeErro = {
  nome: {
    valueMissing: "O campo de nome não pode estar vazio!",
    patternMismatch: "O campo nome não pode conter símbolos nem números!",
  },
  dataDeNascimento: {
    valueMissing: "O campo de data de nascimento não pode estar vazio!",
    customError: "Você deve ser maior de 18 anos para poder abrir uma conta no ByteBank!",
  },
  email: {
    valueMissing: "O campo do email não pode estar vazio!",
    typeMismatch: "Endereço de email inválido!",
  },
  cpf: {
    valueMissing: "O campo do CPF não pode estar vazio!",
    patternMismatch: "CPF Inválido!",
    customError: "CPF Inválido!",
  },
  cep: {
    valueMissing: "O campo do CEP não pode estar vazio!",
    patternMismatch: "CEP Inválido!",
    badInput: "Digite apenas números no campo de CEP!",
    customError: "Não foi possível encontrar um enderço válido para esse CEP!"
  },
  cidade: {
    valueMissing: "O campo de cidade não pode estar vazio!",
  },
  rua: {
    valueMissing: "O campo de rua não pode estar vazio!",
  },
  numero: {
    valueMissing: "O campo do número não pode estar vazio!",
    badInput: "Digite apenas números no campo de número!",
  }
}
const tiposDeErros = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
  "badInput",
]
const validadores = {
  dataDeNascimento:input => validaDataNascimento(input),
  cpf:input => validaCpf(input),
  cep:input => validaCep(input),
}
function ifsValidacao(input,tipoDeInput) {
  if(checaValidacao(input)) {
    input.parentElement.classList.remove("formulario__campo--invalido");
    input.parentElement.querySelector(".formulario__campo--mensagemErro").innerHTML = "";
  } else {
    input.parentElement.classList.add("formulario__campo--invalido");
    input.parentElement.querySelector(".formulario__campo--mensagemErro").innerHTML =
    checaErro(tipoDeInput, input);
  }
}
function checaValidacao(input) {
  return input.validity.valid;
}
function checaErro(tipoDeInput, input) {
  const checagemInput = input.validity;
  const mensagensDeErrosInput = mensagensDeErro[tipoDeInput];
  for (let i = 0; i < tiposDeErros.length; i++) {
    const erroSelecionado = tiposDeErros[i];
    if (checagemInput[erroSelecionado]) {
      return mensagensDeErrosInput[erroSelecionado];
    }
  }
}
function validaDataNascimento(input){
  const data = new Date(input.value);
  let mensagem = "";

  if(!verificaMaior18(data)) {
    mensagem = "Você deve ser maior de 18 anos para abrir uma conta";
  }

  input.setCustomValidity(mensagem);
}
function verificaMaior18(dataInput) {
  const dataAtual = new Date();
  const dataMais18 = new Date(dataInput.getUTCFullYear() + 18, dataInput.getUTCMonth(), dataInput.getUTCDate());
  return dataMais18 <= dataAtual;
}
function validaCpf(input) {
  const cpf = input.value.replace(/\D/g,"");
  let mensagem = "";

  if(!checaCpfComNumerosRepetidos(cpf) || !checaEstruturaCpf(cpf)) {
    mensagem = "CPF Inválido!";
  }
  input.setCustomValidity(mensagem);
}

function checaCpfComNumerosRepetidos(cpf) {
  const listaCpfRepetido = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ]
  let cpfValido = true;
  listaCpfRepetido.forEach( valor => {
    if( valor == cpf) {
      cpfValido = false;
    }
  })

  return cpfValido;
}

function checaEstruturaCpf(cpf) {
  const multiplicador = 10;

  return checaDigitoVerificador(cpf, multiplicador);
}

function checaDigitoVerificador(cpf, multiplicador) {
  if(multiplicador >= 12) {
      return true;
  }

  let multiplicadorInicial = multiplicador;
  let soma = 0;
  const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('');
  const digitoVerificador = cpf.charAt(multiplicador - 1);
  for(let i = 0; multiplicadorInicial > 1 ; multiplicadorInicial--) {
      soma = soma + cpfSemDigitos[i] * multiplicadorInicial;
      i++;
  }

  if(digitoVerificador == confirmaDigito(soma)) {
      return checaDigitoVerificador(cpf, multiplicador + 1);
  }

  return false;
}

function confirmaDigito(soma) {
  if ((soma%11) == 0 || (soma%11) == 1) {
    return 0;
  }
  return 11 - (soma % 11);
}
function validaCep(input) {
  const cep = input.value.replace(/\D/g,"")
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
  }
  if(!input.validity.patternMismatch && !input.validity.valueMissing) {
    fetch(url, options).then( 
      response => response.json()
      ).then (
        data => {
          console.log(data);
          if (data.erro) {
            input.setCustomValidity("Não foi possível encontrar um enderço válido para esse CEP!");
            ifsValidacao(document.getElementById("cep"),"cep");
            retiraCidade();
            return
          }
          input.setCustomValidity("");
          ifsValidacao(document.getElementById("cep"),"cep");
          preencheCidade(data);
          return
        }
      )
  }
}
function preencheCidade(data) {
  const campoCidade = document.getElementById("cidade");

  campoCidade.value = data.localidade;
}
function retiraCidade() {
  document.getElementById("cidade").value = "";
}
