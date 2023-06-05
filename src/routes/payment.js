const  { Router } = require("express") ;
const {createOrder , receiveWebhook} = require("../controller/payment.controller");

const router = Router();

router.post("/create-order", createOrder );

router.get("/success", (req, res)=>{
    res.send("pago exitoso");
});

router.get("/failure", (req, res)=>{
    res.send("pago rechazado");
});

router.get("/pending", (req, res)=>{
    res.send("pago pendiente");
});


router.post("/webhook", receiveWebhook);

module.exports = router;