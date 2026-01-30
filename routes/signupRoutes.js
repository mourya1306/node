import {signupAdmin} from "../controller/signupController.js";
import express from "express";  
const router = express.Router();

router.post("/", signupAdmin);

export default router;