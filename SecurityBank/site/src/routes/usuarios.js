var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarServidor", function (req, res) {
    usuarioController.cadastrarServidor(req, res);
})
router.post("/cadastrarServidorNuvem", function (req, res) {
    usuarioController.cadastrarServidorNuvem(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/atualizarPerfil", function (req, res) {
    usuarioController.atualizarPerfil(req, res);
});

router.post("/atualizarAcesso", function (req, res) {
    usuarioController.atualizarNivelAcesso(req, res);
});

router.post("/excluirConta", function (req, res) {
    usuarioController.excluirConta(req, res);
});

router.post("/AlterarValidade", function (req, res) {
    usuarioController.UpdateValidadeNova(req, res);
});


module.exports = router;