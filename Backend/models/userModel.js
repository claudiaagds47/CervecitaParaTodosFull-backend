 // Modelo de Usuario
 const userModel = mongoose.model("Usuario", {
    name: String,
    email: String,
   password: String,
    });
    module.exports= userModel