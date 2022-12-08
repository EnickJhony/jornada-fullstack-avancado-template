const { isObjectIdValid } = require("../db/database.helper");
const service = require("./item.service");

//  criando o controller 'FindAll'
//  - recebendo agora ums lista vazia de Itens que posteriormente vira do mongoose
const findAll = async (req, res) => {
    // substituindo o array vazio pelo findAll do item.service
    const items = await service.findAll();
    res.send(items);
};

// Criando o Controller Find By Id
// - recebendo o ID e por hora retornando a resposta do helper
const findById = async (req, res) => {
    const id = req.params.id;

    // Valida se o Objeto é valido, caso contrario, manda uma mensagem de ID invalido
    if(!isObjectIdValid(id)) {
        return res.status(400).send({message: "ID inválido"});
    };

    // Caso o ID seja valido Cria um dicionario do item
    const item = await service.findById(id);

    // Valida se o item existe, caso não, manda uma resposta de item não encontrado.
    if(!item) {
        return res.status(404).send({ message: "Item não encontrado!"});
    };

    // Mandando a resposta com o Item montado Bonitinho, um verdadeiro xuxu!
    res.send(item);
};

// Criando o Controller 'Create'
const create = async (req, res) => {
    // Recebendo o Item do corpo da pagina
    const item = req.body;

    // Validando se os itens passados estao corretos
    // - e retornando uma mensagem de erro caso nao esteja.
    if(!item || !item.name || !item.imageUrl || !item.category) {
        return res.status(400).send({ message: "Dados Inválidos!" });
    }

    // Criando o Item
    const newItem = await service.create(item);

    // Mandando o Item.
    res.status(201).send(newItem);
};

// Criando o Controller 'Update'
const update = async (req, res) => {
    const id = req.params.id;

    if(!isObjectIdValid(id)) {
        return res.status(400).send({ message: "ID Inválido!"});
    }

    const item = req.body;

    if(!item || !item.name || !item.imageUrl || !item.category) {
        return res.status(400).send({ message: "Dados Inválidos!"});
    }

    const updateItem = await service.update(id, item);

    if(!updateItem) {
        return res.send(404).send({ message: "Item não encontrado!"});
    }
    
    res.send({ message: "Item Atualizado com sucesso!"});
};

// Criando o Controller 'DeleteById'
const deleteById = async (req, res) => {
    const id = req.params.id;

    if(!isObjectIdValid(id)) {
        return res.status(400).send({ message: "ID Inválido!"});
    }

    const deletedItem = await service.deleteById(id);

    if(!deletedItem) {
        return res.status(404).send({ message: "Item não encontrado!"});
    }

    res.send({ message: "Item excluido com sucesso!"});
};

//  exportando os controllers do item
module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
};