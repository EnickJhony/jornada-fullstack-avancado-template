const { default: mongoose } = require("mongoose");

// Criando uma variavel que vai receber a url que vai ser passando quando a funcao for usada.
const databaseUrl = "mongodb://127.0.0.1:27017/jornada-fullstack-avancado";

// Criando o helpper que vai validar o mongoDB
const conectToDatabase = () => {
    return mongoose
        .connect(databaseUrl)
        .then(() => console.log("Banco de Dados conectado com sucesso!!!"))
        .catch((error) => 
        console.log("Erro na conexão com o banco de dados.\n", error)
        );
};

// Criando o primeiro Helper para validar o ID
// - porem sem nenhuma validacao no momento
const isObjectIdValid = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

// Exportando os Helpers!
module.exports = {
    isObjectIdValid,
    conectToDatabase,
};