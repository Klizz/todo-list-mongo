const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VariantSchema = new Schema({
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Stores'
    },
    product_id: {
        type: String
    },
    product_title: {
        type: String
    },
    product_image: {
        type: String
    },
    vendor: {
        type: Number
    },
    variant_id: {
        type: String
    },
    variant_title: {
        type: String
    },
    variant_weight: {
        type:Number
    },
    variant_unit: {
        type: String
    },
    variant_price: {
        type: String
    },
    variant_recommended_price: {
        type: String
    },
    price_selected: {
        type: String
    },
    tax: {
        type: Number
    },
    status: {
        type: String,
        enum: ['Calculando', 'Sin conflicto', 'Conflicto', 'Completo'],
        default: 'Calculando'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

VariantSchema.virtual(tax_calculated).get(function(){
    return((this.tax * this.final_price) / 100).toFixed(2)
})

VariantSchema.set('toObject', { virtuals: true })
VariantSchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Variants', VariantSchema);