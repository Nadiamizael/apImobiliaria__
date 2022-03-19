import express from "express";
import AdminController from "../controllers/Admin.controller.js";

const router = express.Router();

router.get("/", AdminController.getAllAdmins);
router.get("/:id", AdminController.getAdminById);
router.post("/register", AdminController.registerAdmin);
router.put("/:id", AdminController.updateAdmin);
router.delete("/:id", AdminController.deleteAdmin);

export default router;
