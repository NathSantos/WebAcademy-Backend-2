"use strict";
// Criando a biblioteca 1 
const biblioteca_1 = [] = [
    { nome: "it a coisa", preco: 59.99, categoria: "Terror" },
    { nome: "maus", preco: 49.90, categoria: "Quadrinhos" },
    { nome: "laranja mecânica", preco: 45.00, categoria: "Distopia" },
    { nome: "uma vida pequena", preco: 65.00, categoria: "Romance" }
];
biblioteca_1.forEach(livro => {
    console.log(`Nome: ${livro.nome}`);
    console.log(`Preço: R$ ${livro.preco}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log("---");
});
