const express = require("express")
const router = express.Router()
const controller = require("../controllers/hoteisController")

router.get("/", controller.get)
router.post("/", controller.post)
router.put("/:id", controller.putById)

module.exports = router