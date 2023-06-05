const  express = require('express');
const router = require('./routes/payment') ;
const { PORT } = require("./config");
const morgan = require("morgan");

const app = express();
app.use(morgan('dev'));
app.use(router, (r,q,s)=>{
    s();
});


app.listen(PORT);
console.log("Server on port " + PORT);

