const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');


const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//GET = Buscar alguma informação do serviço, POST= Criar alguma coisa, PUT= Alterar, DELETE= Deletar

routes.post('/boxes',BoxController.store);
routes.get('/boxes/:id',BoxController.show);

routes.post('/boxes/:id/files',multer(multerConfig).single('file') ,FileController.store);

module.exports = routes;