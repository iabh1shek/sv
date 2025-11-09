import dotenv from 'dotenv' 
import jwt from 'jsonwebtoken'
dotenv.config() 


const authMiddleware = (req,res,next) =>{ 
    const authHeader = req.headers.authorization; 
    if(!authHeader || !authHeader.startsWith('Bearer ')) { 
        return res.status(400).json({ 
            message: 
            "something went wrong / invalid token"
        })
    } 


    const token = authHeader.split(' ')[1]

    try {
        const decode = jwt.verify(token,process.env.jwt_secret); 
        req.userid = decode.userid; 
        next(); 
    } catch (error) {
        console.log(error)
        res.status(403).json({ 
            message: "something is wrong"
        })
    }
}
export default authMiddleware; 