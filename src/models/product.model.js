const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title : {type: String, require: true},
    category : {type: String, require: true},
    price : {type: Number},
    imageUrl: {type: String}
});

module.exports = mongoose.model('products',productSchema);