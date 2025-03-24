import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// get method
router.get("/", getProducts);

//// creating a log 
router.post("/", createProduct);

/// update method
router.put("/:id", updateProduct);

// deleting the log
router.delete("/:id",deleteProduct);


export default router;