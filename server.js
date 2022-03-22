import express from "express";
import * as dotenv from "dotenv";
import sequelize from "./src/db/connection.js";
import Admin from "./src/models/Admin.model.js";
import router from "./src/routes/admin.routes.js";

dotenv.config();
const port = process.env.PORT || 3001;

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
