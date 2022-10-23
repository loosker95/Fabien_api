const express = require('express');
const router = express.Router();

const myController = require('../controllers/mainController');


router.get("/", myController.homePage);
router.get("/api/users/", myController.getUser);
router.post("/api/add", myController.addUser);
router.get("/api/show/:id", myController.findUser);
router.patch("/api/update/:id", myController.updateUser);
router.get("/api/delete/:id", myController.deleteUser);


module.exports = router;