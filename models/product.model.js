const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const productSchema = new Schema({
    productName: {
        type: String,
        trim: true,
        required: true,
        minlength: true
    },
    productDesc: {
        type: String,
        trim: true,
        minlength: true
    },
    productUrl: {
        type: String,
        trim: true
    },
    productPrice: {
        type: Number,
        trim: true,
        minlength: true
    },
    productCategory: {
        type: String,
        minlength: true
    }
}, {
    timestamps: true
})


const Product = mongoose.model('Product', productSchema)
module.exports = Product;