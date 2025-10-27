// Problem statement - Let people sign up to your website
// Only allow signed in users to see people (create
// a dummy people list)

// A website which has 2 endpoints -
// POST /signin
// Body - {
// username: string
// password: string
// }
// Returns a json web token with username encrypted

// GET /users
// Headers -
// Authorization header
// Returns an array of all users if user is signed in (token is correct)
// Returns 403 status code if not

// jwt ---> jsonwebtoken 

const express = require('express'); 
const jwt = require('jsonwebtoken'); 

const jwtPassword = "abhi"; 
const port = 3000; 

const app = express(); 

app.use(express.json()); 

const ALL_USERS = [{
    username:"abhishek@gmail.com", 
    password: "abhi", 
    name : "abhishek"
},
{
    username:"prateek@gmail.com", 
    password: "prat", 
    name : "prateek"
},
{
    username:"sahil@gmail.com", 
    password: "124", 
    name : "sahil"
} 
]; 

function userExist(username, password) { 
    let x= ALL_USERS.find((user) =>user.username === "abhishek@gmail.com" && user.password ==='abhi')
    return (x ? true: false )
}

function usernameExist(username) { 
    for(let i = 0; i < ALL_USERS.length; i++){ 
        if(ALL_USERS[i].username === username) { 
            return true; // user exist
        }
        return false; 
    }
}

app.post('/signup', function(req,res) { 
    const username = req.body.username; 
    const password  = req.body.password; 
    const name = req.body.name; 


    // where we can check if this username already exist or not ?? 
    if(usernameExist(username)) { 
        console.log('inside if statement'); 

        return res.status(403).json({ 
            message: "user already exist in our db , please go to signin "
        })
    }

    // if username doesnt exist  
    ALL_USERS.push({ 
        username : username, 
        password : password, 
        name: name, 
    })


    // generate jwt --> user 
    let token = jwt.sign({username: username}, jwtPassword) // token create  

    // return 
    res.status(200).json({ 
        message:" everything is good", 
        token
    })

    console.log("user signed in successfully "); 
})


// signin route 
app.post('/signin', function(req,res){ 
    const username  = req.body.username; 
    const password = req.body.password;

    // not existing user  
    if(!userExist(username,password)) { 
        return res.status(403).json({ 
            msg : "incorrect username or pass"
        });
    }


    // return token after signin 
    let token = jwt.sign({username : username}, jwtPassword) // create jwt 
    res.status(200).json({ token})    

    console.log("user signed in successfully ")


})


// get users list 
app.get('/users', function(req,res) { 
    
    const token = req.headers.authorization; 
    try {
        
        const decoded = jwt.verify(token, jwtPassword); 
        const username = decoded.username; 

        return res.status(200).send(ALL_USERS.filter(function(user){ 
            return user.username !=username; 
        }))
    } catch (error) {
        return res.status(403).json({ 
            msg : "Invalid message"
        })
    }
})


// error handling middleware 
app.use(function(err, req,res,next) { 
    console.log(err.type); 
    res.status(500).json( 
        { 
            message : "something went wrong "
        }
    )
})

app.listen(port, (req,res)=>{ 
    console.log(`serrver is running on port ${port}`)
}); 






