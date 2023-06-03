import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helper.js";
import { statusCode } from "../utils/statusCodes.js";
import { todoModel } from "../models/todo.js";
import { muserModel } from "../models/user.js";


const createTodo=async(req,res)=>{
    const error =validationResult(req);
    if(!error.isEmpty()){
        return res.json(jsonGenerate(statusCode.VALIDATION_ERROR,"TODO is required",error.mapped()))
    }
    try {
        const result=await todoModel.create({
            userId: req.userId,
            desc: req.body.desc,
        })
        if(result){
            const user = await muserModel.findOneAndUpdate({_id: req.userId},
                {
                    $push:{todos:result}
            })
            return res.json(jsonGenerate(statusCode.SUCCESS,"Todo list created Successfully",result))
        }
    } catch (error) {
        console.log(error)
        return res.json(jsonGenerate(statusCode.UNPROCESSABLE_ENTITY,"Something went wrong",error))
    }
}
export default createTodo;