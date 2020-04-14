const mongoose = require("mongoose");
const Store = mongoose.model("Store");

exports.read_a_store = (req, res) => {
  Store.find({}, (err, Store) => {
    if (err) return res.send(err);
    res.json(Store);
  });
}