// aca le especificamos a mongodb como vamos a estar utilizando los datos
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})
export default mongoose.model ('User', userSchema)