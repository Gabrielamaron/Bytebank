export class Conta {
  constructor(nome, usuario, saldoInicial) {
    this._nome = nome;
    this._usuario = usuario;
    this._saldo = saldoInicial;
  };

  get nome() {
    return this._nome;
  };

  get usuario() {
    return this._usuario;
    
  };
  novoSaldo(saldoAtualizado) {
    this._saldo = saldoAtualizado;
  };

  get saldo() {
    return this._saldo;
  };
}
