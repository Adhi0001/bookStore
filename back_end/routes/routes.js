const express=require('express');
const router = express.Router();


const controller = require('../controller/controller')
router.post("/create",controller.SaveBook);
router.get("/all",controller.SeeBook);
router.get("/all/:id",controller.getOne);
router.put("/update/:id",controller.update);
router.patch("/update/:id",controller.updateone);
router.delete("/delete/:id",controller.delete);

module.exports = router;
