import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helper.js";
import { statusCode,JWT_SECRET_TOKEN } from "../utils/statusCodes.js";
import bcrypt from "bcrypt";
import { muserModel } from "../models/user.js";
import Jwt from "jsonwebtoken";
import e from "cors";

const register=async(req,res)=>{
    const error=validationResult(req);
    if (error.isEmpty()) {
        const {userName,name,email,password}=req.body;

        const salt=await bcrypt.genSalt();
        const hashPassword=await bcrypt.hash(password,salt);

        var Password=hashPassword.toString();

        const userExists=await muserModel.findOne({$or: [{
            email:email},
            {userName:userName,}
        ]})
        if(userExists) {
            return res.json(jsonGenerate(statusCode.UNPROCESSABLE_ENTITY,"user or email already exists"))
        }
        try {
            const result= await muserModel.create({
                userName,
                password:Password,
                name,
                email,
            })
            const token=Jwt.sign({user_id:result._id},JWT_SECRET_TOKEN)
            res.json(jsonGenerate(statusCode.SUCCESS,"Registration success",{user_id:result._id, token:token}))
        } catch (error) {
            console.log("Error",error)
        }
    }
    res.json(jsonGenerate(statusCode.VALIDATION_ERROR,"Validation Error",error.mapped()))
    }



export default register;