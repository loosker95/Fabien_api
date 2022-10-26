const express = require('express');
const router = express.Router();
const myValidator = require('../../validations/user.validation');
const myController = require('../../controllers/user.controller');


router.get("/api/users/",myController.getUser); 
router.post("/api/users", myValidator.insertUserValidate, myController.addUser); 
router.get("/api/users/:id", myController.findUser); 
router.patch("/api/users/:id", myValidator.updateUserValidate() ,myController.updateUser); 
router.delete("/api/users/:id", myController.deleteUser);


module.exports = router;

