
// ===================== AULA 1 - EXERCÍCIOS DE 1 A 4 =====================

// Definindo "Categoria" como enum para que os valores sejam pré-definidos
enum Categoria {    
    Ficcao = "Ficção",
    Terror = "Terror",
    Romance = "Romance",
    Quadrinhos = "Quadrinhos",
    Distopia = "Distopia",
    Aventura = "Aventura",
}

// Criando o tipo "Livro"
type Livro = {      
    nome: string;
    preco: number;
    categoria?: Categoria;
};

// Criando o tipo "Autor"	
type Autor = {
    nome: string;
};

let bibliotecas = new Map<Autor, Livro>();  // Criando o Map

// Criando a biblioteca 1 
const biblioteca1: Livro[] = [] = [  
    { nome: "it a coisa", preco: 59.99, categoria: Categoria.Terror },
    { nome: "maus", preco: 49.90, categoria: Categoria.Quadrinhos },
    { nome: "laranja mecânica", preco: 45.00, categoria: Categoria.Distopia },
];

// Criando a biblioteca 2
const biblioteca2: Livro[] = [] = [  
    { nome: "uma vida pequena", preco: 65.00, categoria: Categoria.Romance },
    { nome: "viagem ao centro da terra", preco: 38.00, categoria: Categoria.Aventura },
    { nome: "outsider ", preco: 42.00 },
];

// Adicionando os livros das bibliotecas no Map
bibliotecas.set({ nome: "Stephen King" }, biblioteca1[0]);  
bibliotecas.set({ nome: "Art Spiegelman" }, biblioteca1[1]);
bibliotecas.set({ nome: "Anthony Burgess" }, biblioteca1[2]);
bibliotecas.set({ nome: "Hanya Yan" }, biblioteca2[0]);
bibliotecas.set({ nome: "Júlio Verne" }, biblioteca2[1]);
bibliotecas.set({ nome: "Stephen King" }, biblioteca2[2]);

// Para cada livro no Map, exibir o nome do livro, o nome do autor, o preço e a categoria
bibliotecas.forEach((livro, autor) => {

    /*  Verificando se o nome do livro possui espaços em branco (se possuir, tem mais de uma palavra)
        - trim() -> remove os espaços em branco do início e do fim da string
        - includes() -> verifica se a string possui o valor passado como parâmetro */

    const nome = livro.nome.trim().includes(" ") ? livro.nome.toLowerCase() : livro.nome.toUpperCase(); 

    console.log(`Livro: ${nome} - Autor: ${autor.nome} - Preço: ${livro.preco} - Categoria: ${livro.categoria}`);
}); 
