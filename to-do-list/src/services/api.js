import axios from "axios";
import { CREATE_TODO, LOGIN,REGISTER,TODO_LIST ,DELETE_ITEM} from "./apiConstants.js";
export const login=async(data)=>{
    try {
        return await axios.post(LOGIN, data);
    } catch (error) {
        console.log(error)
    }
};
export const register=async(data)=>{
    try {
        return await axios.post(REGISTER, data);
    } catch (error) {
        console.log(error)
    }
};
export const createTodoApi=async(data)=>{
    try {
        let token=getToken();
        console.log(token,'token')
        return await axios.post(CREATE_TODO, data,{
            headers: {
                auth: token
            }
        });
    } catch (error) {
        console.log(error)
    }
};
export const getTodoListApi=async()=>{
        let token=getToken();
        console.log(token,'token');

        return await axios.get(TODO_LIST,{
            headers: {
                auth:token
            }
        })
};
export const deleteTodoListItemApi=async(data)=>{
    let token=getToken();
    
    return await axios.post(DELETE_ITEM,data,{
        headers: {
            auth:token
        }
    })
};

export function getToken(){
    let user=localStorage.getItem("user");
    if(!user) return
    const userObj=JSON.parse(user);
    return userObj.token;
}