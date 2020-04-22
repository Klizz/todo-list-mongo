const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    name: {
        type: String,
        required: "Ingresa el nombre de la tienda"
    },
    email: {
        type: String,
        required: "Ingresa tu email"
    },
    shop_owner: {
        type: String,
        required: "Por favor ingresa tu nombre"
    },
    telephone: {
        type: Number,
        required: "Porfavor ingresa tu telefono"
    },
    shopify_store_id: {
        type: String,
        required: "Ingresa el id de la tienda"
    },
    myshopify_domain: {
        type: String,
        required: "Ingresa el id de la tienda"
    },
    status: {
        type: String,
        enum: ['En espera', 'En revision'],
        default: ['ongoing']
    },
    created_date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Store', StoreSchema);