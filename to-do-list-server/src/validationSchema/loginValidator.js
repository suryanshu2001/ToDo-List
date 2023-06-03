import { check } from "express-validator";

export const loginSchema=[
    check("userName","user name is required").exists().trim().isLength({min:8,max:33}),
    check("password","password is required").exists().trim().isLength({min:6,max:34})
]