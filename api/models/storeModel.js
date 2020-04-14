const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    id: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: "Ingresa el nombre de la tienda"
    },
    person_name: {
        type: String,
        required: "Por favor ingresa tu nombre"
    },
    telephone: {
        type: Number,
        required: "Porfavor ingresa tu telefono"
    },
    email: {
        type: String,
        required: "Ingresa tu email"
    },
    variants: {
        type: String
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['ongoing']
    }
})
module.exports = mongoose.model('Store', StoreSchema);