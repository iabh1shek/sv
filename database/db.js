const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const jwtPassword = '1234' 
const app = express() ; 
app.use(express.json()) ; 


mongoose.connect(''); 

const User = mongoose.model("User", {
    name: String, 
    username : String,
    password: String 
}) 



// input validation zod library---> (security enhance of our backend)
app.post('/signup', async (req,res) =>{ 
    const {name, username, password} = req.body; 

    // check for an existing user 
    const existinguser = await User.findOne({username}); 

    if(existinguser) { 
        res.json({ 
            message: "user already exists"
        })
    }

    // push new user 
    await User.create({
        name, 
        username, 
        password
    }) 

    res.json({ 
        message: "user created successfully "
    })
})


// sign up 
app.post('/signin', async (req,res) =>{ 
    const{username, password} = req.body; 
``
    // user exist or not 
    const userexist = await User.findOne({username,password}); 
    if(!userexist) { 
        return res.json({ 
            message: "user doesn't exist please signup"
        })
    }
    

    // create jwt sign 
    const token= jwt.sign({username}, jwtPassword); 
    res.json({
        message: "user signin successful" , 
        token
    })
})


app.listen(3000,(req,res)=>{ 
    console.log(`server is running on PORT ${3000}`)
})


