import { Router } from "express";
import AdminController from "../controllers/Admin.controller.js";

const router = Router();

router.get("/admin", AdminController.getAllAdmins);
router.get("/admin/:id", AdminController.getOneAdmin);
router.post("/admin/:cpf", AdminController.registerAdmin);
router.put("/admin/:cpf", AdminController.updateAdmin);
router.delete("/admin/:id", AdminController.deleteAdmin);

export default router;
