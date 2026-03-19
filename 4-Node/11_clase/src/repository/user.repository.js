import User from "../model/user.model.js";

class UserRepository {
    async createUser(username, password, email, telephone) {
        try {
            await User.create({ username, password, email, telephone })
        }
        catch(error) {
            console.error("Error creating user:", error);
        }
    }

    async findById(user_id) {
        try {
            return await User.findById(user_id);
        }
        catch(error) {
            console.error("Error finding user:", error);
        }
    }

    async findByEmail(email) {
        try {
            return await User.findOne({ email });
        }
        catch(error) {
            console.error("Error finding user:", error);    
        }
    }

    async getAll() {
        try {
            return await User.find();
        }
        catch(error) {
            console.error("Error getting users:", error);    
        }
    }

    async deleteById(user_id) {
        try {
            await User.findByIdAndDelete(user_id);
        }
        catch(error) {
            console.error("Error deleting user:", error);    
        }
    }

    async updateById(user_id, updateData) {
        try {
            return await User.findByIdAndUpdate(user_id, updateData, {new: true});  //Actualizar y retornar el dato actualizado
        }
        catch(error) {
            console.error("Error updating user:", error);    
        }
    }
}

const userRepository = new UserRepository();

export default userRepository;
