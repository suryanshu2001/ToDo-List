import { statusCode,JWT_SECRET_TOKEN } from "../utils/statusCodes.js";
import { jsonGenerate} from "../utils/helper.js";
import  Jwt  from "jsonwebtoken";

const authMiddleware=async(req,res,next)=>{
    if(req.headers["auth"]=== undefined){
        return res.json(jsonGenerate(statusCode.AUTH_ERROR,"Access denied"))
    }
    const token =req.headers['auth'];

    try {
        const decoded=Jwt.verify(token,JWT_SECRET_TOKEN)
        console.log(decoded)

        req.userId=decoded.user_id;
        return next();
    } 
    catch (error) {
        return res.json(jsonGenerate(statusCode.UNPROCESSABLE_ENTITY,"Invalid Token"))
    }
}

export default authMiddleware;