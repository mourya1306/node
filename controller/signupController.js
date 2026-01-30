import connection from "../config/db.js";
import bcrpyt from "bcrypt";

const signupAdmin = async (req, res) => {  
    try { 

    const { username, password, email } = req.body; 
    
    const hashedPassword = await bcrpyt.hash(password, 10);

    const [result] =await connection.query(
      `INSERT INTO admins (username, password, email) 
      VALUES ('${username}', '${hashedPassword}', '${email}')`
    )
    
    res.status(201).json({ message: "Admin signed up", userid: result.insertId});

    } catch (error) {
    res.status(500).json({ message: "Error signing up admin", error: error});
  }
}

export { signupAdmin };