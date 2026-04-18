
import * as z from "zod"

export const singnupSchema = z.object({
    name : z.string("enter your name").nonempty().min(1, "name is required"),
    email : z.email("Invalid email address"),
    password : z.string("enter your password").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number").min(6, "Password must be at least 6 characters long"),
    rePassword : z.string("enter your password again").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number").min(6, "Password must be at least 6 characters long"),
    phone : z.string("enter Your Phone Number").min(10, "Phone number must be at least 10 digits long")
}).refine(function (params) {
    return params.password === params.rePassword; }
 ,{error: "Passwords do not match",
    path: ["rePassword"]
 });

    export type singupDataType = z .infer< typeof singnupSchema >