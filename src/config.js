const config = require('dotenv').config();

module.exports = {
    PORT : 3000,
    MERCADOPAGO_APIKEY : process.env.MERCADOPAGO_TOKEN

}