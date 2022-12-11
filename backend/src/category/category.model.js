const mongoose = require("mongoose");

// Criando o model de Category apenas com o Nome.
const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        require: true
    },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;