import connection from "../config/db.js";

const getAllProducts = async (req, res) => {

  const [products] = await connection.query('SELECT * FROM `food_items`')

  res.status(200).json(products);
}

const getProductById = async (req, res) => {
  
  const paramID =  req.params.id;
  const productId = parseInt(paramID); 



  if (!productId) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  const [product] = await connection.query(`SELECT * FROM food_items WHERE id = ${productId}`);

  console.log(product);

  if (!product || product.length === 0) {
    return res.status(404).json({ message: "Product not found" });
  } 

  res.status(200).json(product);  
}

const createProduct = async (req, res) => {

  try {
    const { name, category,desc, price } = req.body;     
    const [result] =await connection.query(
      `INSERT INTO food_items (name, CategoryName, description,  price) 
      VALUES ('${name}', '${category}', '${desc}', ${price})`
    )
    res.status(201).json({ message: "Product created", productid: result.insertId});
    
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error});
  }
}

const searchProductsByName = async (req, res) => {
  const {name} = req.body;  

  if (!name) {
    return res.status(400).json({ message: "Invalid product name" });
  }
  const [products] = await connection.query(`SELECT * FROM food_items WHERE name LIKE '%${name}%'`);
  res.status(200).json(products);  
} 

export { getAllProducts, getProductById ,createProduct, searchProductsByName };