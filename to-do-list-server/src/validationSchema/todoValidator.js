import { check } from "express-validator";

export const todoValidator=[
    check('desc','description is required').exists()]