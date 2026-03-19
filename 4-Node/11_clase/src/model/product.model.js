import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    fk_user_id: {  //Referencia al usuario que creó el producto
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: " "
    },
    price: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    }
});


const Product = mongoose.model('Product', productSchema);

export default Product;