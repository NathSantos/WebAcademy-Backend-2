
// ===================== AULA 1 - EXERCÍCIOS DE 1 A 4 =====================

enum Categoria4 {    
    Ficcao = "Ficção",
    Terror = "Terror",
    Romance = "Romance",
    Quadrinhos = "Quadrinhos",
    Distopia = "Distopia",
    Aventura = "Aventura",
}

type Livro4 = {      
    nome: string;
    preco: number;
    categoria?: Categoria4;
};

// Criando o tipo "Autor"	
type Autor = {
    nome: string;
};

let bibliotecas = new Map<Autor, Livro4>();  // Criando o Map

// Criando a biblioteca 4
const biblioteca_4: Livro4[] = [] = [  
    { nome: "it a coisa", preco: 59.99, categoria: Categoria4.Terror },
    { nome: "maus", preco: 49.90, categoria: Categoria4.Quadrinhos },
    { nome: "laranja mecânica", preco: 45.00, categoria: Categoria4.Distopia },
];

// Criando a biblioteca 5
const biblioteca_5: Livro4[] = [] = [  
    { nome: "uma vida pequena", preco: 65.00, categoria: Categoria4.Romance },
    { nome: "viagem ao centro da terra", preco: 38.00, categoria: Categoria4.Aventura },
    { nome: "outsider ", preco: 42.00 },
];

// Adicionando os livros das bibliotecas no Map
bibliotecas.set({ nome: "Stephen King" }, biblioteca_4[0]);  
bibliotecas.set({ nome: "Art Spiegelman" }, biblioteca_4[1]);
bibliotecas.set({ nome: "Anthony Burgess" }, biblioteca_4[2]);
bibliotecas.set({ nome: "Hanya Yan" }, biblioteca_5[0]);
bibliotecas.set({ nome: "Júlio Verne" }, biblioteca_5[1]);
bibliotecas.set({ nome: "Stephen King" }, biblioteca_5[2]);

// Para cada livro no Map, exibir o nome do livro, o nome do autor, o preço e a categoria
bibliotecas.forEach((livro, autor) => {

    /*  Verificando se o nome do livro possui espaços em branco (se possuir, tem mais de uma palavra)
        - trim() -> remove os espaços em branco do início e do fim da string
        - includes() -> verifica se a string possui o valor passado como parâmetro */

    const nome = livro.nome.trim().includes(" ") ? livro.nome.toLowerCase() : livro.nome.toUpperCase(); 

    console.log(`Nome: ${nome}`);
    console.log(`Autor: ${autor.nome}`);
    console.log(`Preço: R$ ${livro.preco}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log("---");
}); 
