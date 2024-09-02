 // Modelo de Usuario
 const userModel = mongoose.model("User", {
    name: String,
    email: String,
   password: String,
    });
    module.exports= userModel