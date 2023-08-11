const axios = require('axios');


const getProducts = async () => {
    const apiProducts = await axios.get('https://fakestoreapi.com/products');
    return apiProducts.data;

}


module.exports = {
    getProducts
}