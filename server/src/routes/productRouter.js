const { Router } = require('express');
const productRouter = Router();
const { getProductsHandler } = require('../handlers/productsHandlers');


productRouter.get('/', getProductsHandler);
 

module.exports = productRouter;