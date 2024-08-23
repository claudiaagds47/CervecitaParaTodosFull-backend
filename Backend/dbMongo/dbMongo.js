import mongoose from 'mongoose';
require ("dotenv").config();


export const connectDb= async ()=>{
    try{
        await mongoose.connect (process.env.MONGO_URL);
        console.log('estas conectado a la base de datos');

    }catch (error){
        console.log(error.message)
    }
};
