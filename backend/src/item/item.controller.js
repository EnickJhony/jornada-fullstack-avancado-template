// Import do Helper
const { isObjectIdValid } = require("../db/database.helper");

//  criando o controller 'FindAll'
//  - recebendo agora ums lista vazia de Itens que posteriormente vira do mongoose
const findAll = (req, res) => {
    const items = [];
    res.send(items);
};

// Criando o Controller Find By Id
// - recebendo o ID e por hora retornando a resposta do helper
const findById = (req, res) => {
    const id = req.params.id;

    // Valida se o Objeto é valido, caso contrario, manda uma mensagem de ID invalido
    if(!isObjectIdValid(id)) {
        return res.status(400).send({message: "ID inválido"});
    };

    // Caso o ID seja valido Cria um dicionario do item
    const item = {};

    // Valida se o item existe, caso não, manda uma resposta de item não encontrado.
    if(!item) {
        return res.status(404).send({ message: "Item não encontrado!"});
    };

    // Mandando a resposta com o Item montado Bonitinho, um verdadeiro xuxu!
    res.send(item);
}

//  exportando os controllers do item
module.exports = {
    findAll,
    findById,
};