module.exports = (app) => {
    const store = require('../controllers/storeController')
    app.route('/stores')
        .get(store.read_a_store)
        /* .post(store.create_a_store)
    app.route('/stores/:storeId')
        .get(store.read_a_store)
        .put(store.update_a_store)
        .delete(store.delete_a_store) */
}