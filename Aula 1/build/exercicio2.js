"use strict";
// Definindo "Categoria" como enum para que os valores sejam pré-definidos
var Categoria;
(function (Categoria) {
    Categoria["Ficcao"] = "Fic\u00E7\u00E3o";
    Categoria["Terror"] = "Terror";
    Categoria["Romance"] = "Romance";
    Categoria["Quadrinhos"] = "Quadrinhos";
    Categoria["Distopia"] = "Distopia";
    Categoria["Aventura"] = "Aventura";
})(Categoria || (Categoria = {}));
// Criando a biblioteca 2 
const biblioteca_2 = [] = [
    { nome: "it a coisa", preco: 59.99, categoria: Categoria.Terror },
    { nome: "maus", preco: 49.90, categoria: Categoria.Quadrinhos },
    { nome: "laranja mecânica", preco: 45.00, categoria: Categoria.Distopia },
    { nome: "uma vida pequena", preco: 65.00, categoria: Categoria.Romance },
    { nome: "viagem ao centro da terra", preco: 38.00 },
];
biblioteca_2.forEach(livro => {
    console.log(`Nome: ${livro.nome}`);
    console.log(`Preço: R$ ${livro.preco}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log("---");
});
