const mercadopago = require('mercadopago');
const mp = require('mercadopago');
const { MERCADOPAGO_APIKEY } = require('../config');

async function  createOrder (res,res){
    //res.send("cresndo");
    mp.configure({
        access_token : MERCADOPAGO_APIKEY
    });

    const result = await mp.preferences.create({
        items : [
            {
                title : "Laptop",
                unit_price : 500,
                currency_id : 'CLP',
                quantity : 1


            }
        ], back_urls:{
            success : 'http://localhost:3000/success',
            failure : 'http://localhost:3000/failure',
            pending : 'http://localhost:3000/pending',

        },
        notification_url : "https://d6f7-186-104-162-151.sa.ngrok.io/webhook"
    });

    console.log(result);
    res.send(result.body);

}

async function receiveWebhook (req, res){
    console.log(req.query);
    const payment  = req.query;
    if( payment.type === "payment"  ){
        const data = await mercadopago.payment.findById(payment['data.id']);
        console.log(data);
    }

    res.sendStatus(204);
   


}

module.exports = {
    createOrder, receiveWebhook
};