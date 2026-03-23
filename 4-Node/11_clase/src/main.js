import ENVIRONMENT from "./config/environment.config.js";
import connectToMongoDB from "./config/mongoDB.config.js";
import User from "./model/user.model.js";
import userRepository from "./repository/user.repository.js";
import express from 'express';
import statusRouter from "./routes/status.router.js";
import authRouter from "./routes/auth.router.js";


connectToMongoDB();

const app = express();
app.use(express.json())

app.use('/api/status', statusRouter)
app.use('/api/auth', authRouter)

app.listen(ENVIRONMENT.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${ENVIRONMENT.PORT}`);
});





