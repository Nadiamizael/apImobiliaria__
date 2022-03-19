import { Sequelize } from "sequelize";
import "dotenv-safe/config.js";

export const sequelize = new Sequelize(process.env.DATABASE_URL);

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