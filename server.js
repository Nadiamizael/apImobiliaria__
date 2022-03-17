import express from "express";
import * as dotenv from "dotenv";
import sequelize from "./src/db/connection.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("Servidor rodando em http://localhost:" + port);
    });
  })
  .catch((erro) => {
    console.log(" Erro ao iniciar servidor " + erro);
  });
