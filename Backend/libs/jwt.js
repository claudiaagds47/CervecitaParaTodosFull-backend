//aca voy a crear los token
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../validations/config";


export function createAccessToken(payload){
      return new Promise((resolve, reject)=>{
jwt.sign(
    payload,
    TOKEN_SECRET,
    {
        expiresIn: "1d",
    },
    (err, token)=>{
        if (err) reject (err)
            resolve (token)
    }

);
});
}