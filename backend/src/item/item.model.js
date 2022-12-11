const mongoose = require("mongoose");
const Category = require("../category/category.model");

// Criando o Schema base que vai ser passado para o mongoose
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.String,
        require: true,
        ref: Category,
    },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;