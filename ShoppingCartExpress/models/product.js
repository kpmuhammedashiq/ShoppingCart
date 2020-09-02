
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },    
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ''
    }
});

module.exports = Product = mongoose.model('product', ProductSchema);