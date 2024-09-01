

const {adduserController} = require(`../controllers/userController.js`)
const express = require(`express`)
const router = express.Router()
router.get (`/prueba`,(__,res)=>{
res.send(`bienvenido`)    
 })
router.post(`/addcard`, adduserController)
router.get	


 module.exports = router;