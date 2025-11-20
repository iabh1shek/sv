import dotenv from 'dotenv' 
import jwt from 'jsonwebtoken'
dotenv.config() 
const authMiddleware = (req,res,next)=> {
    const authHeader =req.headers.authorization
    
    if(!authHeader || !authHeader.startsWith('Bearer')) { 
        return res.status(400).json({ 
            message: "invalid token/ something went wrong"
        })
    }



    try {
        
        const token = authHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        req.userid = decoded.userid; 
    
        next(); 
    } catch (error) {
        return res.status(403).json({ 
            message: "something went wrong / wrong token"
        })
    }
}

export default authMiddleware; 