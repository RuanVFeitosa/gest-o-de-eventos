const { Router } = require("express");
const ParticipanteController = require("../controller/participanteController");

const router = Router();

// Rotas para Participantes
router.get("/", ParticipanteController.getAll);
router.post("/", ParticipanteController.create);
router.get("/:id", ParticipanteController.getOne);
router.put("/:id", ParticipanteController.update);
router.delete("/:id", ParticipanteController.delete);

module.exports = router;
