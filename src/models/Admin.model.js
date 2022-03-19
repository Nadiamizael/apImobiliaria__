import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Admin = sequelize.define("admin", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Por favor, preencha o seu nome!",
      },
    },
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Por favor, preencha o seu sobrenome!",
      },
    },
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "O preenchimento do e-mail é obrigatório!" },
      isEmail: { msg: "Informe um e-mail válido para prosseguir." },
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Este campo não pode ser deixado em branco!" },
    },
  },

  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Por favor, informe os números do seu CPF.",
      },
      isAlphanumeric: {
        msg: "Por favor, complete este campo utilizando apenas os números do seu CPF.",
      },
      len: {
        args: [11, 11],
        msg: "Insira um número de CPF válido.",
      },
    },
  },

  role: {
    type: DataTypes.ENUM(
      "Corretor",
      "Corretora",
      "Admnistrador",
      "Admnistradora"
    ),
    allowNull: false,
  },
});

export default Admin;
