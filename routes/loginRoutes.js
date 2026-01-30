import { loginAdmin } from "../controller/loginController.js";
import express from "express";  
const router = express.Router();

router.post("/", loginAdmin);   

export default router;