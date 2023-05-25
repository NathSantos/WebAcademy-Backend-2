enum Categoria3 {    
    Ficcao = "Ficção",
    Terror = "Terror",
    Romance = "Romance",
    Quadrinhos = "Quadrinhos",
    Distopia = "Distopia",
    Aventura = "Aventura",
}

type Livro3 = {      
    nome: string;
    preco: number;
    categoria?: Categoria3;
};

// Criando a biblioteca 3
const biblioteca_3: Livro3[] = [] = [  
    { nome: "it a coisa", preco: 59.99, categoria: Categoria3.Terror },
    { nome: "maus", preco: 49.90, categoria: Categoria3.Quadrinhos },
    { nome: "laranja mecânica", preco: 45.00, categoria: Categoria3.Distopia },
    { nome: "uma vida pequena", preco: 65.00, categoria: Categoria3.Romance },
    { nome: "viagem ao centro da terra", preco: 38.00 },
    { nome: "outsider ", preco: 42.00 }
];

biblioteca_3.forEach((livro, autor) => {

    /*  Verificando se o nome do livro possui espaços em branco (se possuir, tem mais de uma palavra)
        - trim() -> remove os espaços em branco do início e do fim da string
        - includes() -> verifica se a string possui o valor passado como parâmetro */

    const nome = livro.nome.trim().includes(" ") ? livro.nome.toLowerCase() : livro.nome.toUpperCase(); 

    console.log(`Nome: ${nome}`);
    console.log(`Preço: R$ ${livro.preco}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log("---");
}); 