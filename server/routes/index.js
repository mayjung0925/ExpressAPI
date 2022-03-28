const express =require('express');
const chirpsRouter = require('./chirps');


let router = express.Router();
//define where each one lives
router.use('/chirps',chirpsRouter);


module.exports = router;