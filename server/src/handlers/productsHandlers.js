const {getProducts} = require('../controllers/productsControllers');

const getProductsHandler = async (req, res) => {
    try {
        const products = await getProducts();
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}


module.exports = {
    getProductsHandler
}