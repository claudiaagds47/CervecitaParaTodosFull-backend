Proyecto final de backend Academia Numen, desde la App Mobile Cervecita para todos
1ro: Instalar express y mongoose,

2do  agregar las siguientes carpetas
-Carpeta controllers: en ella van las funciones que se ejecutan cada vez que el front pide un endpoint,

-Carpeta middlewares: le decimos que rutas estan accesibles a datos autenticados ( solo los usuarios que esten logguaidos pueden ver determinada informacion)

-Carpeta models: aca vienen los modelos de datos de la base de datos, en ella estan los esquemas, le indicamos a mongo que datos queremos que guarde, y si no cumple con esos requisitos le entregamos error

-Carpeta routes: aca se definen las URN que el Frontend pueda pedir

-Carpeta server: es el servidor

-Carpeta validations: si los datos que ingresa el usuario (email y contraseña) no son correctos se tira un error

-Archivo db.js: es la conexion a la base de datos con mongo