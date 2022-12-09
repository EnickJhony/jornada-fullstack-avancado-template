const express = require("express");
const cors = require("cors");


// Imports dos Routers e da validacao do DB
const itemRouter = require("./item/item.router");
const categoryRouter = require("./category/category.router");
const { conectToDatabase } = require("./db/database.helper");



// Porta do servidor
const port = process.env.PORT || 3000;

async function main() {
  // Eh um helpper que auxilia na conexao do DB
  await conectToDatabase();

  // Cria o servidor `express`
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(express.json());

  // Rota principal
  app.get("/", (req, res) => {
    res.send("Simbora negadaaaaaa!!!!!");
  });

  // Inicialização dos `Routers`
  app.use("/item", itemRouter);
  app.use("/category", categoryRouter);

  // Inicia o servidor
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

main().catch((err) => console.error("Um erro inesperado ocorreu.\n", err));


//  atividade 1
//  create findAll apenas com o Nome.