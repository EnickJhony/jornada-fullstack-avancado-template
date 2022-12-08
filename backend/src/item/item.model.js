const mongoose = require("mongoose");

// Criando o Schema base que vai ser passado para o mongoose
const itemSchema = new mongoose.Schema({
    name: { type: String, require: true },
    imageUrl: { type: String, require: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Category",
    },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;