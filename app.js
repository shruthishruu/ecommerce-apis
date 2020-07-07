const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const session = require('express-session');

require('dotenv/config');

app.use(bodyparser.json()); 
app.use(session({secret:"1gdgsgdsh1hj827812119927sfdsaa", resave:false, saveUninitialized:true}));

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true ,useUnifiedTopology: true },
    ()=>{ console.log('connected to db!');}
);

const userRouts = require('./routes/users');
app.use('/',userRouts);

const prodRouts = require('./routes/product');
app.use('/products',prodRouts);

const cartRouts = require('./routes/carts');
app.use('/cart',cartRouts);



app.listen(4000);