const { Router } = require("express")
const { validateEvent, validateEventId } = require("../middleware/ValidateEvent");

const router = Router();

router.post("/", validateEvent, (req, res) => {
    eventController.create(req, res);
})

router.get("/", validateEvent, (req, res) => {
    eventController.getAll(req, res);
})

router.get("/:id", validateEventId, (req, res) => {
    eventController.getOne(req, res);
})

router.put("/:id", validateEvent, validateEventId, (req, res) => {
    eventController.update(req, res);
})

router.delete("/:id", validateEventId, (req, res) => {
    eventController.delete(req, res);
})

module.exports = router;