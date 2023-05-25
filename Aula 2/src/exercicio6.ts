abstract class Conta {
    protected numero: string;
    protected saldo: number;
    protected cliente: Cliente;
  
    constructor(numero: string, saldo: number, cliente: Cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
  
    // Getters
    public getNumero(): string {
        return this.numero;
    }
  
    public getSaldo(): number {
        return this.saldo;
    }
  
    public getCliente(): Cliente {
        return this.cliente;
    }
  
    // Métodos abstratos
    public abstract sacar(valor: number): void;
    public abstract depositar(valor: number): void;
}
  
class ContaPJ extends Conta {
    private cnpj: string;
    private razaoSocial: string;
  
    constructor(numero: string, saldo: number, cliente: Cliente, cnpj: string, razaoSocial: string) {
        super(numero, saldo, cliente);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }
  
    // Getters
    public getCnpj(): string {
        return this.cnpj;
    }
  
    public getRazaoSocial(): string {
        return this.razaoSocial;
    }
  
    // Métodos de validação de saldo
    private validarSaldoSuficiente(valor: number): boolean {
        return this.saldo >= valor;
    }
  
    // Métodos de operação da conta
    public sacar(valor: number): void {
        if (this.validarSaldoSuficiente(valor)) {
            this.saldo -= valor;
            console.log(`Saque realizado: R$ ${valor}`);
        } else {
            console.log("Saldo insuficiente para o saque.");
        }
    }
  
    public depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito realizado: R$ ${valor}`);
    }
}
  
class ContaPF extends Conta {
    private cpf: string;
    private nome: string;
  
    constructor(numero: string, saldo: number, cliente: Cliente, cpf: string, nome: string) {
        super(numero, saldo, cliente);
        this.cpf = cpf;
        this.nome = nome;
    }

    public getCpf(): string {
        return this.cpf;
    }
  
    public getNome(): string {
        return this.nome;
    }
  
    // Método de validação de saldo
    private validarSaldoSuficiente(valor: number): boolean {
        return this.saldo >= valor;
    }
  
    // Métodos de operação da conta
    public sacar(valor: number): void {
        if (this.validarSaldoSuficiente(valor)) {
            this.saldo -= valor;
            console.log(`Saque realizado: R$ ${valor}`);
        } else {
            console.log("Saldo insuficiente para o saque.");
        }
    }
  
    public depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito realizado: R$ ${valor}`);
    }
}
  
class Cliente {
    private nome: string;
    private endereco: string;
    private contas: Conta[];
  
    constructor(nome: string, endereco: string) {
        this.nome = nome;
        this.endereco = endereco;
        this.contas = [];
    }
  
    // Getters
    public getNome(): string {
        return this.nome;
    }
  
    public getEndereco(): string {
        return this.endereco;
    }
  
    // Métodos de operação das contas
    public adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }
  
    public mostrarContas(): void {
        console.log(`Cliente: ${this.nome}`);
        console.log("Contas:");
        this.contas.forEach((conta) => {
            if (conta instanceof ContaPJ) {
                console.log(`Conta PJ - CNPJ: ${conta.getCnpj()}, Razão Social: ${conta.getRazaoSocial()}`);
            } else if (conta instanceof ContaPF) {
                console.log(`Conta PF - CPF: ${conta.getCpf()}, Nome: ${conta.getNome()}`);
            }
        });
    }
}
  
// Exemplo de uso
const cliente1 = new Cliente("João", "Rua A, 123");

const contaPJ = new ContaPJ("001",10000,cliente1,"12.345.678/0001-01","Empresa ABC");
const contaPF = new ContaPF("002",5000,cliente1,"123.456.789-01","João");
  
cliente1.adicionarConta(contaPJ);
cliente1.adicionarConta(contaPF);

console.log(`Cliente: ${cliente1.getNome()}`);
console.log(`Endereço: ${cliente1.getEndereco()}`);

cliente1.mostrarContas();  