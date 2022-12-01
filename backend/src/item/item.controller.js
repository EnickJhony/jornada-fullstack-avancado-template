//  criando o controller 'FindAll'
//  - mandando apenas uma string como resposta
const findAll = (req, res) => {
    res.send("Find All");
};



//  exportando os controllers do item
module.exports = {
    findAll,
};