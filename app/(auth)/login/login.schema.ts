
import * as z from "zod"

export const loginSchema = z.object({
    email : z.email("Invalid email address"),
    password : z.string("enter your password").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number").min(6, "Password must be at least 6 characters long"),
    
})

    export type loginDataType = z .infer< typeof loginSchema >