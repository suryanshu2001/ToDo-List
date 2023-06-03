import { check } from "express-validator";

export const markTodoValidator=[
    check('todo_id','todo id is required').exists()]