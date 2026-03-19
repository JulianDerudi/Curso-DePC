import dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = {
    MONGO_DB_URI: process.env.MONGO_DB_URI,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
};

export default ENVIRONMENT;