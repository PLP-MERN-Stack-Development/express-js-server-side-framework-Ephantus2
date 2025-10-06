const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');
const validateProduct = require('../middleware/validateProduct');
const authenticate = require('../middleware/authenticate');


router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

router.post('/', authenticate, validateProduct, productController.createProduct);
router.put('/:id', authenticate, validateProduct, productController.updateProduct);
router.delete('/:id', authenticate, productController.deleteProduct);

module.exports = router;
