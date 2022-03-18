import Admin from "../models/Admin.model.js";
import bcrypt from "bcrypt";

export class AdminController {
  // método create
  static async registerAdmin(req, res) {
    const { firstName, lastName, email, password, cpf, role } = req.body;

    if (!firstName || !lastName || !email || !password || !cpf || !role) {
      return res.status(400).json({ messege: "Preencha todos os dados." });
    }

    const adminExists = await Admin.findOne({ where: { cpf: cpf } });

    if (adminExists) {
      return res.status(400).json({ message: "Admin já cadastrado!" });
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
      res.status(201).json({ message: "Admin cadastrado com sucesso!" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  // método read
  static async getAllAdmins(req, res) {
    try {
      const allAdmin = await Admin.findAll();
      return res.status(200).json(allAdmin);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async getOneAdmin(req, res) {
    const { id } = req.params;
    try {
      const oneAdmin = await Admin.findOne({
        where: {
          id: id,
        },
      });
      return res.status(200).json(oneAdmin);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // método update
  static async updateAdmin(req, res) {
    const { cpf } = req.params;
    const updateInfo = req.body;
    try {
      await Admin.update(updateInfo, { where: { cpf: cpf } });
      const updateAdmin = await Admin.findOne({ where: { cpf: cpf } });
      return res.status(200).json(updateAdmin);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  // método delete
  static async deleteAdmin(req, res) {
    const { id } = req.params;
    try {
      await Admin.destroy({ where: { id: id } });
      return res
        .status(200)
        .json({ message: `Admin com ${id} deletado com sucesso!` });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default AdminController;
