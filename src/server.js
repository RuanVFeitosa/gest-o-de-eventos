require('dotenv').config();

const express = require("express");
const app = express();
const routerUser = require ("./router/routerUser");
const routerEvent = require ("./router/routerEvent");
const sequelize = require("./config/config");
const router = require ("./router/router");

app.use(express.json());
app.use("/", router);

app.get("/healthcheck", (req, res) => {
    return res.status(200).json({
        msg: "Estamos funcionando",
        alive: true
    })
})

sequelize
.authenticate()
.then(async () => {
    console.log('Conexão com o banco de dados realizada com sucesso.');
    await sequelize.sync();
})
.then(async () => {
    app.listen(process.env.PORT || 8080, () => {
        console.log("Servidor rodando");
    })
})
.catch((error) => {
    console.error("Erro ao conectar com o banco de dados: ", error);
  });