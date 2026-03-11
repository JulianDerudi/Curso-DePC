import ENVIRONMENT from "./config/environment.config.js";
import { checkConnectionDB } from "./config/mysql.config.js";
import userRepository from "./repositories/user.repository.js";


checkConnectionDB();


/* userRepository.create({
    name: "Juan",
    email: "3ZVdasM@example.com",
    password: "123456",
    telephone_number: "1128666809",
    img_profile: null
}); */

// userRepository.getByEmail("3ZVdasM@example.com")

userRepository.getAll()