const express = require('express');
const router = express.Router();

const myController = require('../controllers/mainController');


router.get("/api/users/", myController.getUser); 
router.post("/api/users", myController.addUser); 
router.get("/api/users/:id", myController.findUser); 
router.patch("/api/users/:id", myController.updateUser); 
router.delete("/api/users/:id", myController.deleteUser);


module.exports = router;

