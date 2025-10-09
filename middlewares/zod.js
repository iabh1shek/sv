const express = require('express')
const zod = require('zod')
const app = express();

app.use(express.json()) ; 

// input schema 
const kidneyInput = zod.literal("1").or(zod.literal("2")); 
app.post('/health-checkup', function(req,res) { 
    // do something with checkup hehre 
    const kidneyId = req.body.kidneyId; 
    const {success} = kidneyInput.safeParse(kidneyId); 
    

    if(!success){ 
        res.send("incorrect inputs"); 
        return;
    }
    res.send("your kidney id is " + kidneyId); 
    
})
app.listen(3000); 

