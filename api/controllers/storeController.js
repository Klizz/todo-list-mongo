const mongoose = require("mongoose");
const Store = mongoose.model("Store");

exports.create_a_store = (req, res) => {
  const new_record = new Store(req.body)
  new_record.save((err, record) => {
    if (err) return res.status(400).send(err)
    res.json(record)
  })
}

exports.read_a_store = (req, res) => {
  Store.find({}, (err, Store) => {
    if (err) return res.send(err);
    res.json(Store);
  });
}