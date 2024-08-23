import {Router} from 'express';
import { login, register,logout, profile } from '../controllers/auth.controllers';
import { authRequired } from '../middlewares/validateToken';
const router= Router();


// aca van las funciones que dan las respuestas a las peticiones de los controladores(los endpoints)

router.get('/api/register', register);
    
router.post ('/api/login',login);

router.post ("/api/logout", logout);

router.get ("/api/profile", authRequired, profile);

export default router;