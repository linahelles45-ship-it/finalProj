"use server"

import { cookies } from "next/headers"
import { loginDataType } from "./login.schema"

// import { cookies } from 'next/headers';
// import { loginDataType } from './login.schema';

// export async function loginAction(values : loginDataType){


//             const myCookies = await cookies()
//             myCookies.set("token", finalRes.token , {
//                 httpOnly : true,
//                 maxAge : 60 * 60 * 24,
//                 sameSite : "strict"
//             })
        
//         return res.ok
// }

export async function loginAction(values: loginDataType) {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
    })

    const finalRes = await res.json()

    if (finalRes.message === "success") {
        const myCookies = await cookies()
        myCookies.set("token", finalRes.token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            sameSite: "strict"
        })
        return { success: true }
    }

    return { success: false, message: finalRes.message }
}