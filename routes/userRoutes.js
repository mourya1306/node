import { getAllUsers ,getUserById ,createUser } from "../controller/userController.js";
import express from "express";  
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/mydetails/jfhdjfh/fjdk",getUserById)
router.post("/", createUser);
// n number of routes I can create here and then simply export 
// and use in index.js with app.use no need to write each route in index.js
export default router;