import { check } from "express-validator";

export const registerSchema=[
    check('name').trim().isLength({min:2,max:28}).isAlpha().withMessage('Name should contain Alphabets only'),
    check('userName','user name is required').exists().isAlphanumeric().withMessage('user name should have alphanumeric characters only').trim().isLength({min:2,max:21}),
    check("password","password is required").exists().trim().isLength({min:2,max:34}),
    check("email","email is required").exists().isEmail().withMessage('should be a genuine email')
]