import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  host: "./src/db/database.sqlite",
});

async function conectar() {
  try {
    await sequelize.authenticate();
    console.log("Banco conectado!");
  } catch (err) {
    console.log("Não foi possível conectar:", err);
  }
}

conectar();

export default sequelize;
