const express = require('express');
const app = express(); 
app.use(express.json()); 
const zod = require('zod')

function validateInput(arr) { 
    // input schema 

    const schema = zod.array(zod.number()) ; 

    const response = schema.safeParse(arr); 
    console.log(response);
}


validateInput(["1",2,3]); 

app.listen(3000);