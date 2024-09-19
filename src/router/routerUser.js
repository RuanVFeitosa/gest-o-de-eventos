const { Router } = require("express")
const { validateUser, validateUserId } = require("../middleware/ValidateUser");
const userController = require ("../controller/participantController")

const router = Router();

router.post("/", validateUser, (req, res) => {
    userController.create(req, res);
})
router.get("/", validateUser, (req, res) => {
    userController.getAll(req, res);
})
router.get("/:id", validateUserId, (req, res) => {
    userController.getOne(req, res);
})
router.put("/:id", validateUser, validateUserId, (req, res) => {
    userController.update(req, res);
})
router.delete("/:id", validateUserId, (req, res) => {
    userController.delete(req, res);
})

module.exports = router