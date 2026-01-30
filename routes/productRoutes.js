import express from "express";
import { getAllProducts ,getProductById ,createProduct ,searchProductsByName } from "../controller/productController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

// when we scan identity card only then go into office else we cant enter
// to get identity card we need to verify who we are (we authenticate ourselves login/signup )
// after login only we get identity card(token) and then only we can access office(protected route)


router.get("/", authMiddleware, getAllProducts);  //protected route
router.get("/search", searchProductsByName);
router.get("/:id", getProductById);
router.post("/", createProduct);
// n number of routes I can create here and then simply export 
// and use in index.js with app.use no need to write each route in index.js
export default router;