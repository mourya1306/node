import connection from "../config/db.js";
import bcrpyt from "bcrypt";
import jwt from "jsonwebtoken";

const loginAdmin = async (req, res) => {  
    try { 
        const { username, password } = req.body; 

        const [rows] = await connection.query(
            `SELECT * FROM admins WHERE username = '${username}'`
        ); 

        if (rows.length === 0) {
            return res.status(404).json({ message: "Admin not found" });
        }    

        const admin = rows[0];  

        const isPasswordValid = await bcrpyt.compare(password, admin.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }    

        const payload = { id: admin.id, username: admin.username };
        
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: "Login successful", token: token });

    } catch (error) {
        res.status(500).json({ message: "Error logging in admin", error: error});
    }   
}

export { loginAdmin };