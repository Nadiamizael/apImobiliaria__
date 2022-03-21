import express from "express";
import AdminController from "../controllers/Admin.controller.js";

const router = express.Router();

router.get("/", AdminController.getAllAdmins);
router.get("/:id", AdminController.getAdminById);
router.post("/register", AdminController.registerAdmin);
router.put("/:id", AdminController.updateAdminById);
router.delete("/:id", AdminController.deleteAdminById);

export default router;
