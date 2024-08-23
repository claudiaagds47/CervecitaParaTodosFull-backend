import User from '../models/user.model'
// Aca van las funciones que se ejecutan cada vez que el front pide un endpoint,
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt';

export const register = async (req, res)=>{
    const {email, password} = req.body();
    
    try{
     const passwordHash=   await bcrypt.hash(password, 10)//
       
     const newUser= new User({
        email,
        password: passwordHash,
    });
   //token: string que recibe de forma adicional el frontend y cuando quiera pedir algo lo 
   //q tiene que devolver en forma de pase(para eso utilizo jsonwebtoken)
  
        res.cookie('token', token)
    res.json({
        massage:'usuario creado satisfactoriamente'
    })

    
   
   const userSaved = await  newUser.save();
   const token = await createAccessToken({id: userSaved._id})
   res.cookie("token", token); 
   res.json({
        id: userSaved._id,
        email: userSaved.email,
             });

}catch (error){
        res.status(500).json({msg: error.msg});
};
}


export const login = async (req, res)=>{
    const {email, password} = req.body();
    
    try{
       const userFund= await User.findOne({email});
       if (!userFound) return res.status(400).json 
       ({message: "usuario no encontrado"});
     
    const isMatch =   await bcrypt.compare(password, 
        userFound.password);
       if (!isMatch) return res.status(400).json 
       ({msg: 'contraseña incorrecta'});
    const token = await createAccessToken({id: userFound._id});
    
   res.cookie("token", token); 
   res.json({
        id: userFound._id,
        email: userFound.email,
             });

   }catch (error){
        res.status(500).json({msg: error.msg});
   };
  }

  export const logout = (req, res)=> {
    res.cookie('token', "", {
        expires: new Date (0)
    })
    return res.sendStatus (200);
  }

  export const profile = (req, res) => {
    res.send ('profile')
  }