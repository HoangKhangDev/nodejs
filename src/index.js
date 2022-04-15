import express from 'express';
var app= express();
import config from '../src/configs/viewEngine.js';

require('dotenv').config();

config(app);


app.get('/',function(req,res){
    res.render('trangchu');
})

app.listen(process.env.PORT,()=>{
    console.log('listening on port 3000');
})
