
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const process = require("dotenv").config();



const app= express();
const port = 4000;

app.use(express.json());
app.use(cors());

module.exports= app;

//middlewares

const loginMiddleware = (req, res, next) => {

  console.log(`${req.method} request for '${req.url}'`);
   next();
  };
 
 app.use(loginMiddleware);


//models

const User = mongoose.model("User", {
  name: String,
  email: String,
 password: String,
  });

  const Register = mongoose.model("Register", {
    email: String,
   password: String,
    });



// conectando con base de datos
 mongoose.connect(
    'mongodb+srv://claudiaagds47:azcuenaga62@cluster0.esy457n.mongodb.net/',
   {}
  )
  .then(() => console.log("Successfully connected to MongoDB"))
 .catch((error) => console.error("Error to connected to MongoDB ", error));



// Ruta para obtener todos los usuarios
app.get("/Contacto", async (req, res) => {
  try {
   const usuarios = await User.find();
   res.json(usuarios);
 } catch (error) {
   res.status(500).json({ message: "Error al obtener usuarios", error });
 }
});

 // Ruta para crear un usuario en contacto
app.post("/Contacto", async (req, res) => {
 const { name, email, password } = req.body;
  const usuario = new User({ name, email, password });
  try {
   await usuario.save();
   res.status(201).json(usuario);
  } catch (error) {
   res.status(400).json({ message: "Error al crear usuario", error });
  }
 });

  // Ruta para crear un usuario en registrame
app.post("/api/Register", async (req, res) => {
  const { email, password } = req.body;
   const register = new Register({email, password });
   try {
    await register.save();
    res.status(201).json(register);
   } catch (error) {
    res.status(400).json({ message: "Error al crear usuario", error });
   }
  });


// Ruta para actualizar un usuario
app.put("/Contacto/:id", async (req, res) => {
   const { id } = req.params;
  const { name, email, password } = req.body;
 try {
   const usuario = await User.findByIdAndUpdate(
    id,
    { name, email, password },
     { new: true }
   );
   if (!usuario) {
     return res.status(404).json({ message: "Usuario no encontrado" });
   }
   res.json(usuario);
 } catch (error) {
  res.status(400).json({ message: "Error al actualizar usuario", error });
 }
 });

// Ruta para eliminar un usuario
app.delete("/Contacto/:id", async (req, res) => {
  const { id } = req.params;
  try {
   console.log("trying to delete user");
    console.log("id", id);
    console.log("---------");
  console.log("---------");
  const usuario = await User.findByIdAndDelete(id);
  if (!usuario) {
    return res.status(404).json({ message: "Usuario no encontrado" });
   }
   res.json({ message: "Usuario eliminado" });
 } catch (error) {
   console.log(error);
   res.status(400).json({ message: "Error al eliminar usuario", error });
  }
 });

 //conexion con una api externa

 app.get("/frases", async (req,res)=>{
 const  category = await fetch (
'https://api.api-ninjas.com/v1/quotes?category=',
   {}
    );
    
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});


app.listen(port, () => {
  console.log(`Server on port ${port}`);
 });