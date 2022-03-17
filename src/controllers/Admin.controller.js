import Admin from "../models/Admin.model.js";
import bcrypt from "bcrypt";

export class AdminController {
  static async register(req, res) {
    const { firstName, lastName, email, password, cpf, role } = req.body;

    if (!firstName || !lastName || !email || !password || !cpf || !role) {
      return res.status(422).json({ messege: "Preencha todos os dados." });
    }

    const adminExists = await Admin.findOne({ where: { cpf: cpf } });

    if (adminExists) {
      return res.status(422).json({ message: "Admin já cadastrado!" });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHashed = await bcrypt.hash(password, salt);

    const admin = new Admin({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: passwordHashed,
      cpf: cpf,
      role: role,
    });

    try {
      await Admin.create(admin);
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async getAllAdmins(req, res) {
    try {
      const allAdmin = await Admin.findAll();
      return res.status(200).json(allAdmin);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
