const express = require('express');
const cors = require('cors');
const path = require('path');

const apiRouter = require('./routes')

let app = express();


app.use(cors());
//Bodyparser middleware json=>js
app.use(express.json());

//middleware apiRouter
app.use('/api', apiRouter)

app.use(express.static(path.join(__dirname,'../client')))


app.listen(3000);

