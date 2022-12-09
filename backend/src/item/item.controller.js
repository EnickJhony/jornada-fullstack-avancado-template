const { isObjectIdValid } = require("../db/database.helper");
const service = require("./item.service");

const findAll = async (req, res) => {
    // Buscando no Service a entidade Item
    const items = await service.findAll();
    // E respondendo o 'item' criado
    res.send(items);
};

const findById = async (req, res) => {
    // O findById recebe por padrao um ID, la no router.
    // criando uma variavel que vai recer esse ID passado no Parametro GET.
    const id = req.params.id;

    // Verificando se o ID é valido via Helpper.
    if(!isObjectIdValid(id)) {
        return res.status(400).send({message: "ID inválido"});
    };

    // Caso o ID seja valido utiliza o Service e buscar exatamente o Item do DB.
    const item = await service.findById(id);

    // Valida se o item existe, caso não, manda uma resposta de item não encontrado.
    if(!item) {
        return res.status(404).send({ message: "Item não encontrado!"});
    };

    // Mandando a resposta com o Item montado Bonitinho, um verdadeiro xuxu!
    res.send(item);
};

const create = async (req, res) => {
    // Recebendo o Item do corpo da pagina, vindo do POST.
    const item = req.body;

    // Validando se os itens passados estao corretos.
    // Preciso Criar o Model do Category, pois ele está invalidando o Item.
    // Vou dormir senao nao vai rolar corrida pela manhã. hihihihi
    if(!item || !item.name || !item.imageUrl || !item.category) {
        return res.status(400).send({ message: "Dados Inválidos!" });
    }

    // Criando o Item vindo do service
    const newItem = await service.create(item);

    res.status(201).send(newItem);
};

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