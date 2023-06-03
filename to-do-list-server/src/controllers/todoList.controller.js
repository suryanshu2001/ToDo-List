import { muserModel } from "../models/user.js"
import { jsonGenerate } from "../utils/helper.js"
import { statusCode } from "../utils/statusCodes.js"

export const getTodo=async(req,res)=>{
    try {
        const list=await muserModel.findById(req.userId)
    .select("-password")
    .populate('todos')
    .exec();
     console.log(list)
    return res.json(jsonGenerate(statusCode.SUCCESS,"All todo list retrieved successfully",list))
    } catch (error) {
        console.log(error);
        return res.json(jsonGenerate(statusCode.UNPROCESSABLE_ENTITY,"Something went wrong",error));
        
    }

}