import mongoose from "mongoose";
import dotenv from 'dotenv' 
dotenv.config()

mongoose.connect(process.env.MONGO_URL) 

// userschema 
const userSchema = new mongoose.Schema({ 
    username: String, 
    password: String, 
    email: String
})

// create the data model 
const userModel = mongoose.model('User', userSchema)

export {userModel}