import { jsonGenerate } from "../utils/helper.js";
import { statusCode } from "../utils/statusCodes.js";
import { todoModel } from "../models/todo.js";
import { muserModel } from "../models/user.js";
import { validationResult } from "express-validator";


const markTodo=async(req,res)=>{
    const error =validationResult(req);
    if(!error.isEmpty()){
        return res.json(jsonGenerate(statusCode.VALIDATION_ERROR,"TODO is required",error.mapped()))
    }
    try {
        const result=await todoModel.findByIdAndUpdate({
            _id: req.body.todo_id,
            userId: req.userId,
        },[
            {
                $set:{
                    isCompleted:{
                        $eq:[false,'$isCompleted']
                    }
                }
            }
        ]);
        if(result){
            return res.json(jsonGenerate(statusCode.SUCCESS,"item is marked",result))
        }
    } catch (error) {
        console.log(error)
        return res.json(jsonGenerate(statusCode.UNPROCESSABLE_ENTITY,"Something went wrong",null))
    }
}
export default markTodo;