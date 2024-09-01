
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const process = require("dotenv").config();
const userModel = require("userModel");
const loginMiddleware= require ("loginMiddleware");


const app= express();
const port = 4000;

app.use(express.json());
app.use(cors());

export default app;



// conectando con base de datos
mongoose
 .connect(
    'mongodb+srv://claudiaagds47:azcuenaga62@cluster0.esy457n.mongodb.net/',

   {
    useNewUrlParser: true,
   useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Conectado a MongoDB Atlas"))
 .catch((error) => console.error("Error al conectar a MongoDB Atlas", error));



// Ruta para obtener todos los usuarios
app.get("/Contactanos", async (req, res) => {
  try {
   const usuarios = await User.find();
   res.json(usuarios);
 } catch (error) {
   res.status(500).json({ message: "Error al obtener usuarios", error });
 }
});

 // Ruta para crear un usuario
app.post("/Contactanos", async (req, res) => {
 const { name, email, password } = req.body;
  const usuario = new User({ name, email, password });
  try {
   await usuario.save();
   res.status(201).json(usuario);
  } catch (error) {
   res.status(400).json({ message: "Error al crear usuario", error });
  }
 });


// Ruta para actualizar un usuario
app.put("/Contactanos/:id", async (req, res) => {
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
app.delete("/Contactanos/:id", async (req, res) => {
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
  console.log(`Servidor iniciado en el puerto ${port}`);
 });