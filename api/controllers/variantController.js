const mongoose = require('mongoose')
const Variant = mongoose.model('Variants')

exports.review_variants = async (req, res) => {
    if(req.body.variants && req.body.variants.length > 0) {
        let variants_ids = []
        const store = await store.findOne({ shopify_shop_id: req.params.id })
        for(let i=0; i < req.body.variants.length; i++){
            const variant = req.body.variants[i]
            const existVariant = await Variant.findOne({ variant_id: variant.variant_id })

            if(existVariant){
                await existVariant.update(variant)
                variants_ids.push(existVariant._id)
            } else {
                const newVariant = new Variant({ ...variant, store: store._id })
                await newVariant.save()
                variants_ids.push(newVariant._id)
            }
        }
        store.status = "en_revision"
        
    } else {
        res.status(400).json({ message: "Variantes no encontradas" })
    }
}