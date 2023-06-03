import express from "express";
import register from "../controllers/register.controller.js";
import { registerSchema } from "../validationSchema/registrationValidator.js";
import { dbConn } from "../config/dbcon.js";
import { loginSchema } from "../validationSchema/loginValidator.js";
import login from "../controllers/login.controlls.js";
import authMiddleware from "../middleware/auth.js";
import createTodo from "../controllers/toDo.controlls.js";
import { todoValidator } from "../validationSchema/todoValidator.js";
import { get } from "mongoose";
import { getTodo } from "../controllers/todoList.controller.js";
import { markTodoValidator } from "../validationSchema/markTodoValidator.js";
import markTodo from "../controllers/markTodo.controller.js";
import removeTodo from "../controllers/removeTodo.controller.js";


dbConn();
export const apiRoute=express.Router();
export const apiProtected=express.Router();

apiRoute.post("/register",registerSchema,register);
apiRoute.post("/login",loginSchema,login);

//protected routes

apiProtected.post("/todo",authMiddleware,todoValidator,createTodo);
apiProtected.get("/list",authMiddleware,getTodo);
apiProtected.post("/markTodo",authMiddleware,markTodoValidator,markTodo);
apiProtected.post("/removeTodo",authMiddleware,markTodoValidator,removeTodo);

