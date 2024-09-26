const { Router } = require("express");
const EventoController = require("../controller/eventoController");

const router = Router();

// Rotas para Eventos
router.get("/", EventoController.getAll);
router.post("/", EventoController.create);
router.get("/:id", EventoController.getOne);
router.put("/:id", EventoController.update);
router.delete("/:id", EventoController.delete);
router.get("/:id/participantes", EventoController.getParticipantes);

module.exports = router;
