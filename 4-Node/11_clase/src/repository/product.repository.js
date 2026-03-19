import Product from "../models/product.model.js";

class ProductRepository {

    async create(fk_user_id, {title, description, price, stock}) {
        const productData = {title, description, price, stock};
        const product = new Product({ ...productData, fk_user_id });
        return await product.save();
    }

    async findById(product_id) {
        try {
            return await Product.findById(product_id);
        }
        catch(error) {
            console.error("Error finding product:", error);
        }
    }

    async getAll() {
        try {
            return await Product.find();
        }
        catch(error) {
            console.error("Error getting products:", error);    
        }
    }

    async deleteById(product_id) {
        try {
            await Product.findByIdAndDelete(product_id);
        }
        catch(error) {
            console.error("Error deleting product:", error);    
        }
    }
    
    async updateById(product_id, updateData) {
        try {
            return await Product.findByIdAndUpdate(product_id, updateData, {returnDocument: 'after'});  //Actualizar y retornar el dato actualizado
        }
        catch(error) {
            console.error("Error updating product:", error);
        }    
    }

    async getAllByUserId(user_id) {
        try {
            return await Product.find({ fk_user_id : user_id });
        }
        catch(error) {
            console.error("Error getting products by user ID:", error);    
        }
    }
}


const productRepository = new ProductRepository();

export default productRepository;