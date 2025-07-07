import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
} from "../controllers/categories.controller.js";
import { authenticateToken } from "../middlewares/auth.js";
const router = Router();

router.get("/categories", authenticateToken, getCategories);
router.get("/categories/:id", getCategoryById);
router.post("/categories",authenticateToken, createCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);
export default router;
