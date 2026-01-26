/* Fake database (in memory) */
let users = [
  { id: 1, name: "Sandeep", age: 25 },
  { id: 2, name: "Amit", age: 26 },
  { id: 3, name: "John", age: 30 },
  { id: 4, name: "Doe", age: 22 }
];




/* ---------------- GET ---------------- */

const getAllUsers = (req, res) => {
  res.status(200).json(users);
}

const getUserById = (req, res) => {
  const paramID =  req.params.id;
  const userId = parseInt(paramID);

  const user = users.find((u) =>{
    return u.id === userId;
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
}


const createUser = (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: "Name and age required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    age
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser
  });
}


export { getAllUsers, getUserById ,createUser };