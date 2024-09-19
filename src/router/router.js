const { Router } = require("express");
const userRoutes = require ("./routerUser");
const eventsRoutes = require ("./routerEvent")

const UserController = require ("../controller/participantController");
const EventController = require ("../controller/eventController");
const router = Router();

router.use("/part", userRoutes);
router.use("/eventos", eventsRoutes);


module.exports = router