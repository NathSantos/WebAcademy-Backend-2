"use strict";
class Conta {
    constructor(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    // Getters
    getNumero() {
        return this.numero;
    }
    getSaldo() {
        return this.saldo;
    }
    getCliente() {
        return this.cliente;
    }
}
class ContaPJ extends Conta {
    constructor(numero, saldo, cliente, cnpj, razaoSocial) {
        super(numero, saldo, cliente);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }
    // Getters
    getCnpj() {
        return this.cnpj;
    }
    getRazaoSocial() {
        return this.razaoSocial;
    }
    // Métodos de validação de saldo
    validarSaldoSuficiente(valor) {
        return this.saldo >= valor;
    }
    // Métodos de operação da conta
    sacar(valor) {
        if (this.validarSaldoSuficiente(valor)) {
            this.saldo -= valor;
            console.log(`Saque realizado: R$ ${valor}`);
        }
        else {
            console.log("Saldo insuficiente para o saque.");
        }
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito realizado: R$ ${valor}`);
    }
}
class ContaPF extends Conta {
    constructor(numero, saldo, cliente, cpf, nome) {
        super(numero, saldo, cliente);
        this.cpf = cpf;
        this.nome = nome;
    }
    getCpf() {
        return this.cpf;
    }
    getNome() {
        return this.nome;
    }
    // Método de validação de saldo
    validarSaldoSuficiente(valor) {
        return this.saldo >= valor;
    }
    // Métodos de operação da conta
    sacar(valor) {
        if (this.validarSaldoSuficiente(valor)) {
            this.saldo -= valor;
            console.log(`Saque realizado: R$ ${valor}`);
        }
        else {
            console.log("Saldo insuficiente para o saque.");
        }
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito realizado: R$ ${valor}`);
    }
}
class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.contas = [];
    }
    // Getters
    getNome() {
        return this.nome;
    }
    getEndereco() {
        return this.endereco;
    }
    // Métodos de operação das contas
    adicionarConta(conta) {
        this.contas.push(conta);
    }
    mostrarContas() {
        console.log(`Cliente: ${this.nome}`);
        console.log("Contas:");
        this.contas.forEach((conta) => {
            if (conta instanceof ContaPJ) {
                console.log(`Conta PJ - CNPJ: ${conta.getCnpj()}, Razão Social: ${conta.getRazaoSocial()}`);
            }
            else if (conta instanceof ContaPF) {
                console.log(`Conta PF - CPF: ${conta.getCpf()}, Nome: ${conta.getNome()}`);
            }
        });
    }
}
// Exemplo de uso
const cliente1 = new Cliente("João", "Rua A, 123");
const contaPJ = new ContaPJ("001", 10000, cliente1, "12.345.678/0001-01", "Empresa ABC");
const contaPF = new ContaPF("002", 5000, cliente1, "123.456.789-01", "João");
cliente1.adicionarConta(contaPJ);
cliente1.adicionarConta(contaPF);
console.log(`Cliente: ${cliente1.getNome()}`);
console.log(`Endereço: ${cliente1.getEndereco()}`);
cliente1.mostrarContas();
