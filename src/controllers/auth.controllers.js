

import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jasonwebtoken';

export const register = async (req, res) => {
    console.log(email, password)
    const {email, password}= req.body;
    try {
        
        const passwordHash= await bcrypt.hash(password, 10)
        
        const newUser= new User({
            email,
            password,
        });
       
        const userSaved = await newUser.save();
       
       jwt.sign({
        id:userSaved._id,
       }, 'secret123',
       {
        expiresIn: "1d",
       },
       (err, token)=>{
        if(err) console.log(err);
        res.cookie ('token', token);
        res.json({
            message: "User created successfully"
        })
       }
    );
       
       
        res.json({
            id: userSaved._id,
            email: userSaved.email,
    });
    
     } catch (error){
        console.log(error);
    }
    };
    
export const login = (req,res) => res.send('login');