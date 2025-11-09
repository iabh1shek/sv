import express from 'express' 
import zod from 'zod'
import jwt from 'jsonwebtoken'
import { userModel } from '../db.js';
import dotenv from 'dotenv'
import authMiddleware from '../middlewares/auth.js';

dotenv.config()
const userRouter = express.Router(); 


// signup
const signupschema = zod.object({ 
    username: zod.string() , 
    password :zod.string(), 
    email: zod.email()
}) 
userRouter.post('/signup',authMiddleware, async (req, res)=>{ 
    // logic for signup route
    const {success} =signupschema.safeParse(req.body)
    

    if(!success) { 
        return res.status(400).json({
            message: "invalid input"
        })
    }


    // if everything is good 
    const existingUser = await userModel.findOne({ 
        email: req.body.email
    })

    if(existingUser) { 
        return res.status(400).json({ 
            message: "user already exist please use different email for signup"
        })
    }

    
    // if user doesn't exist --> create a new user 
    const user = await userModel.create({ 
        username : req.body.username, 
        password: req.body.password, 
        email: req.body.email
    }) 

    const userid = user._id; 
    // sign jwt token 
    const token = jwt.sign({userid},process.env.jwt_secret); 
    res.json({ 
        message: "user signup successfull",
        token: token
    })
})


// signin 
const signinschema = zod.object({ 
    username: zod.string(), 
    password: zod.string()
})
userRouter.post('/signin',authMiddleware,async (req,res)=>{ 
    const {success} = signinschema.safeParse(req.body) ; 
    if(!success) { 
        return res.status(400).json({ 
            message:"invalid inputs"
        })
    }


    // if user exist or not ?? 
    const existinguser =await userModel.findOne({ 
        username: req.body.username, 
        password: req.body.password
    }) 

    if(!existinguser) { 
        return res.status(400).json({ 
            msg: "user doesn't exist please signup "
        })
    }


    const userid = existinguser._id; 
    const token = jwt.sign({userid},process.env.jwt_secret)

    res.json({ 
        message: "user sigin successfull", 
        token: token
    })
})


export default userRouter;


