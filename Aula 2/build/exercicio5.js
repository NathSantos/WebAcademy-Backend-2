"use strict";
class Produto {
    constructor(nome, categoria, preco, status) {
        this.codigo = Produto.codigoAtual++;
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
    }
    // ============= Getters =============
    getCodigo() {
        return this.codigo;
    }
    getNome() {
        return this.nome;
    }
    getCategoria() {
        return this.categoria;
    }
    getPreco() {
        return this.preco;
    }
    getStatus() {
        return this.status;
    }
    // ============= Setters =============
    setNome(nome) {
        this.nome = nome;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    setStatus(status) {
        this.status = status;
    }
}
Produto.codigoAtual = 1;
class ProdutoInfantil extends Produto {
    constructor(nome, categoria, preco, status, faixa_etaria) {
        super(nome, categoria, preco, status);
        if (!this.verificarFaixaEtariaValida(faixa_etaria)) {
            throw new Error("Faixa etária inválida.");
        }
        this._faixa_etaria = faixa_etaria;
    }
    verificarFaixaEtariaValida(faixa_etaria) {
        return faixa_etaria <= 12;
    }
    // Getter e Setter específico para faixa_etaria
    getFaixaEtaria() {
        return this._faixa_etaria;
    }
    setFaixaEtaria(faixa_etaria) {
        if (this.verificarFaixaEtariaValida(faixa_etaria)) {
            this._faixa_etaria = faixa_etaria;
        }
        else {
            throw new Error("Faixa etária inválida.");
        }
    }
    // Métodos protegidos acessíveis somente pelas classes filhas
    metodoProtegido() {
        console.log("Este é um método protegido.");
    }
}
// >>>>>>>>>>> Exemplo de objeto Produto <<<<<<<<<<<
const produto1 = new Produto("Camiseta", "Vestuário", 29.99, "EM_ESTOQUE");
console.log(produto1.getCodigo());
console.log(produto1.getNome());
console.log(produto1.getCategoria());
console.log(produto1.getPreco());
console.log(produto1.getStatus());
// Modificando atributos do objeto Produto
produto1.setNome("Camiseta Nova");
produto1.setCategoria("Moda");
produto1.setPreco(39.99);
produto1.setStatus("ESGOTADO");
console.log(produto1.getNome());
console.log(produto1.getCategoria());
console.log(produto1.getPreco());
console.log(produto1.getStatus());
// >>>>>>>>>>> Exemplo de objeto ProdutoInfantil <<<<<<<<<<<
const produto2 = new ProdutoInfantil("Brinquedo", "Brinquedos", 19.99, "EM_ESTOQUE", 10);
console.log(produto2.getCodigo());
console.log(produto2.getNome());
console.log(produto2.getCategoria());
console.log(produto2.getPreco());
console.log(produto2.getStatus());
console.log(produto2.getFaixaEtaria());
// Modificando atributos do objeto ProdutoInfantil
produto2.setNome("Novo Brinquedo");
produto2.setCategoria("Jogos");
produto2.setPreco(24.99);
produto2.setStatus("ESGOTADO");
produto2.setFaixaEtaria(8);
console.log(produto2.getNome());
console.log(produto2.getCategoria());
console.log(produto2.getPreco());
console.log(produto2.getStatus());
console.log(produto2.getFaixaEtaria());
