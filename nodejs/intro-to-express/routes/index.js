//Rotas


//Importa o módulo express, retorna a função que cria o express e guarda na variável
const express = require("express"); 
//A variável armazena extamente aquela função, criando uma instância do módulo
const app = express(); 

//Criando rotas.
//req = requisição, res = resposta
app.get("/", (req, res) => {
    res.send("Hello, World! This is the main route");
});

app.get("/about", (req, res) => {
    res.send("About this page");
});

app.get("/blog", (req, res) => {
    res.send("Blog page");
})

//Criar server, esta ação deve ser feita no final do código, o que tive abaixo não é interpretado.
let port = 3000;
app.listen(port, () => {
    //O método listen() aceita uma função de callback
    console.log("Server running at port " + port + "...");
});