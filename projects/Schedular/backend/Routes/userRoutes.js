import express from 'express' 
import zod from 'zod' 
import jwt from 'jsonwebtoken' 
import dotenv from 'dotenv' 
import { userModel } from '../db.js'
dotenv.config() 

const userRouter = express.Router();

// schema validation 
const signupschema = zod.object({
    username: zod.string(),
    password: zod.string(),
    email: zod.email()

})



userRouter.post('/signup', async (req, res) => {
    // logic for signup route
    const {success} =signupschema.safeParse(req.body)
    
    if(!success) { 
        return res.status(400).json({
            message: "invalid input"
        })
    }

    // if user exists or not . 
    const existingUser = await userModel.findOne({
        email: req.body.email
    })

    if(existingUser) { 
        return res.status(400).json({ 
            message: "email already exist please signin"
        })
    }


    const user = await userModel.create({
        username: req.body.username, 
        password: req.body.password, 
        email: req.body.email
    })


    const userid = user._id; 
    // user id for jwt 
    const token  = jwt.sign({userid}, process.env.JWT_SECRET)

    res.json({ 
        message: "user created successfully", 
        token: token
    })
})


// signin schema 
const signinschema = zod.object({ 
    username: zod.string(), 
    password: zod.string()
})


userRouter.post('/signin', async (req,res)=>{ 
    const {success} = signinschema.safeParse(req.body) ; 
    if(!success) { 
        return res.status(400).json({ 
            message:"invalid inputs"
        })
    }


    const existinguser = await userModel.findOne({ 
        username: req.body.username,
        password: req.body.password
    }) 
    if(!existinguser) { 
        res.status(400).json({ 
            message: "check you username or password"
        })
    }


    const userid = existinguser._id
    const token =jwt.sign({userid},process.env.JWT_SECRET)

    res.json({
        message: "user signin successfull", 
        token: token
    })
})


export default userRouter;