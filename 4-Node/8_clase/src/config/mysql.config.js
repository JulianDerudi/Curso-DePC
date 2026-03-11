import mysql from "mysql2/promise";
import ENVIRONMENT from "./environment.config.js";


// un Singleton es una clase que solo tiene una instancia con maximo
// la pool es un objeto (SINGLETON)
const pool = mysql.createPool({
    host: ENVIRONMENT.MYSQL_DB_HOST,
    user: ENVIRONMENT.MYSQL_DB_USERNAME,
    password: ENVIRONMENT.MYSQL_DB_PASSWORD,
    database: ENVIRONMENT.MYSQL_DB_NAME,
    port: ENVIRONMENT.MYSQL_DB_PORT,
    connectionLimit: 2
});

export async function checkConnectionDB() {
    try {
        await pool.execute("SELECT 1")
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos", error);
    }
}

export default pool;