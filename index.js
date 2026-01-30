import express from "express";
import dotenv from 'dotenv';

dotenv.config();

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import signupRoutes from "./routes/signupRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";

const app = express();
const PORT = 3000;

/* Middleware to read JSON body */
app.use(express.json());



//req and res function
//route handler
//register to app

//get all users
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);


/* Start server */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//GET http://localhost:3000/users/mydetails


// GET http://localhost:${PORT}/users  
// GET http://localhost:${PORT}/users/:id
// POST http://localhost:${PORT}/users
// GET http://localhost:${PORT}/products  
// GET http://localhost:${PORT}/products/:id
// POST http://localhost:${PORT}/products