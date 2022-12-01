//  criando o controller 'FindAll'
//  - recebendo agora ums lista vazia de Itens que posteriormente vira do mongoose
const findAll = (req, res) => {
    const items = [];
    res.send(items);
};

// Criando o Controller Find By Id
// - que provavelmente vai receber um id e vai voltar as informacoes do 'banco'
const findById = (req, res) => {
    
}


//  exportando os controllers do item
module.exports = {
    findAll,
    findById,
};