const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const auth = require("../../middlewares/auth");
const router = express.Router();

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement a route definition for `/v1/users/:userId`
router.get(
    "/:userId",
    auth,
    validate(userValidation.getUser),
    userController.getUser
);
router.put(
    "/:userId",
    auth,
    validate(userValidation.setAddress),
    userController.setAddress
  );
  
module.exports = router;

// const validateUser = validate(userValidation.getUser); 
// const validateSetAdress = validate(userValidation.setAddress);
// // TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement a route definition for `/v1/users/:userId`
// router.get("/:userId", auth, validateUser, userController.getUser);

// // Need to add a validation for the update address part
// router.put("/:userId", auth, validateSetAdress, userController.setAddress);
// module.exports = router;
