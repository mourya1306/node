import express from "express";
import { getAllProducts ,getProductById ,createProduct ,searchProductsByName } from "../controller/productController.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/search", searchProductsByName);
router.get("/:id", getProductById);
router.post("/", createProduct);
// n number of routes I can create here and then simply export 
// and use in index.js with app.use no need to write each route in index.js
export default router;