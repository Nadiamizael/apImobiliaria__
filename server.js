import "dotenv-safe/config.js";
import express from "express";
import sequelize from "./src/db/connection.js";
import Admin from "./src/models/Admin.model.js";
import router from "./src/routes/admin.routes.js";

const port = process.env.port;

const app = express();

app.use(express.json());
app.use("/admin", router);

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
