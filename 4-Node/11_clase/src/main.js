import ENVIRONMENT from "./config/environment.config.js";
import connectToMongoDB from "./config/mongoDB.config.js";
import User from "./model/user.model.js";
import userRepository from "./repository/user.repository.js";



connectToMongoDB();

userRepository.updateById("69bb085bf3aeaf76e0f8f65f", { username: "NuevoNombre" })
    .then(updatedUser => {
        console.log("Usuario actualizado:", updatedUser);
    })


