const { isObjectIdValid } = require("../db/database.helper");
const service = require("./category.service")

const findAll = async (req, res) => {
    const category = await service.findAll();
    res.send(category);
}

const findById = async (req, res) => {
    const id = req.params.id;

    if(!isObjectIdValid(id)) {
        return res.status(400).send({ message:"ID Inválido" });
    };

    const category = await service.findById(id);

    if(!category) {
        return res.status(404).send({ message: "Categoria não encontrada!" });
    };

    res.send(category);
}

const create = async (req, res) => {
    // Recebendo o Item do corpo da pagina, vindo do POST.
    const category = req.body;

    if(!category || !category.name) {
        return res.status(400).send({ message: "Dados invalidos!" });
    }

    const newCategory = await service.create(category);

    res.status(201).send(newCategory);
}

module.exports = {
    findAll,
    findById,
    create,
};