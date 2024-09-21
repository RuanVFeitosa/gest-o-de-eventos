const { Router } = require("express");
const participanteRoutes = require("./routerParticipante");
const eventoRoutes = require("./routerEvent");

const router = Router();

// Usar rotas específicas
router.use("/participantes", participanteRoutes);
router.use("/eventos", eventoRoutes);

module.exports = router;
