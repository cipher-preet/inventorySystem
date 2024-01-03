const express = require('express');
const router = express.Router();
const authMiddleware = require('../MIddleware/AuthMiddleware')

const userController = require('../Controllers/UserController');
const jwt = require('jsonwebtoken');

// User registration
router.post('/register', userController.registerUser);
router.post('/login',userController.loginUser)
router.post('/createProduct',authMiddleware, userController.productCreated)
router.get('/fectProduct',authMiddleware, userController.fectProduct)
router.post('/updateProduct/:productId',authMiddleware, userController.updateProductApi)
router.delete('/deleteProduct/:productId',authMiddleware, userController.deleteProduct)
router.get('/fetchUserProduct/:productId',authMiddleware, userController.fetchProductById)


module.exports = router;
