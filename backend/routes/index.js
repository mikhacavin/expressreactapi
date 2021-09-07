import express from "express";

import {
  getAllProducts,
  createProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProducts);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
