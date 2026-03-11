import dotenv from "dotenv";

// Lee el archivo root .env y lo asigna a las variables de entorno
dotenv.config();

const ENVIRONMENT = {
    MYSQL_DB_HOST: process.env.MYSQL_DB_HOST,
    MYSQL_DB_NAME: process.env.MYSQL_DB_NAME,
    MYSQL_DB_USERNAME: process.env.MYSQL_DB_USERNAME,
    MYSQL_DB_PASSWORD: process.env.MYSQL_DB_PASSWORD,
    MYSQL_DB_PORT: process.env.MYSQL_DB_PORT
}

export default ENVIRONMENT