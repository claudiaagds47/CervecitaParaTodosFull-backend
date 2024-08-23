import express from 'express';
import morgan from 'morgan';
import authRoutes from '../routes/auth.routes';

//importar el archivo con la base de datos de mongo y llamrla mas abajo para usarla (mongodb();)

const server= express();


server.use(morgan('dev'));
server.use(express.json());
server.use(authRoutes);

export default server;