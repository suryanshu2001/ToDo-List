import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helper.js";
import { statusCode,JWT_SECRET_TOKEN } from "../utils/statusCodes.js";
import bcrypt from "bcrypt";
import { muserModel } from "../models/user.js";
import Jwt from "jsonwebtoken";



const login=async(req,res)=>{
    const error=validationResult(req);
    if (error.isEmpty()) {
        const {userName,password}=req.body;
        const user=await muserModel.findOne({userName:userName,})
        if(!user) {
            res.json(jsonGenerate(statusCode.UNPROCESSABLE_ENTITY,
                "username or password is incorrect"));
                return;
        }
        const verified=bcrypt.compare(password,user.password);
        if(!verified) {
            res.json(jsonGenerate(statusCode.UNPROCESSABLE_ENTITY,
                "password is incorrect"));
        }
        const token=Jwt.sign({user_id:user._id},JWT_SECRET_TOKEN)
        res.json(jsonGenerate(statusCode.SUCCESS,"Login success",{user_id:user._id, token:token}))
        console.log("Login success")
        }
        else {
    res.json(jsonGenerate(statusCode.VALIDATION_ERROR,"Validation Error",error.mapped()))}
    }
export default login;