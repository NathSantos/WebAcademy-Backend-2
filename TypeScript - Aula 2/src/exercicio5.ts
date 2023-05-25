type Status = "EM_ESTOQUE" | "ESGOTADO";

class Produto {
    private static codigoAtual = 1;
    private codigo: number;
    private nome: string;
    private categoria: string;
    private preco: number;
    protected status: Status;

    constructor(nome: string, categoria: string, preco: number, status: Status) {
        this.codigo = Produto.codigoAtual++;
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
    }

    // ============= Getters =============

    public getCodigo(): number {
        return this.codigo;
    }

    public getNome(): string {
        return this.nome;
    }

    public getCategoria(): string {
        return this.categoria;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getStatus(): Status {
        return this.status;
    }

    // ============= Setters =============

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setCategoria(categoria: string): void {
        this.categoria = categoria;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

    public setStatus(status: Status): void {
        this.status = status;
    }
}

class ProdutoInfantil extends Produto {
    private _faixa_etaria: number;

    constructor(nome: string, categoria: string, preco: number, status: Status, faixa_etaria: number) {
        super(nome, categoria, preco, status);

        if (!this.verificarFaixaEtariaValida(faixa_etaria)) {
            throw new Error("Faixa etária inválida.");
        }

        this._faixa_etaria = faixa_etaria;
    }

    private verificarFaixaEtariaValida(faixa_etaria: number): boolean {
        return faixa_etaria <= 12;
    }

    // Getter e Setter específico para faixa_etaria
    public getFaixaEtaria(): number {
        return this._faixa_etaria;
    }

    public setFaixaEtaria(faixa_etaria: number): void {
        if (this.verificarFaixaEtariaValida(faixa_etaria)) {
            this._faixa_etaria = faixa_etaria;
        } else {
            throw new Error("Faixa etária inválida.");
        }
    }

    // Métodos protegidos acessíveis somente pelas classes filhas
    protected metodoProtegido(): void {
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

const produto2 = new ProdutoInfantil("Brinquedo","Brinquedos",19.99,"EM_ESTOQUE",10);
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


    