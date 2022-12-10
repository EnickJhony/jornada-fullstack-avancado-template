const Category = require("./category.model");
const ObjectId = require("mongoose").Types.ObjectId;

const findAll = () => {
    return Category.find();
}

const findById = (id) => {
    const objectId = new ObjectId(id);
    return Category.findById(objectId);
}

const create = (category) => {
    return Category.create(category);
}

module.exports = {
    findAll,
    findById,
    create,
}