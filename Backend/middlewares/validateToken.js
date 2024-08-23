//aca le diremos que rutas estan protegidas por usuarios autenticados, 
//creando funciones que validen para que solo los usurios ue esten logueados puedan acceder

export const authRequired= (req, res, next)=>{
    console.log('validando token');
    next()
}
