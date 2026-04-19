
// "use client"
// import React from 'react'
// import { useForm, Controller} from 'react-hook-form'
// import { Button } from '@/components/ui/button'
// import { Field, FieldError, FieldLabel } from '@/components/ui/field'
// import { Input } from '@/components/ui/input'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { loginSchema, loginDataType } from './login.schema'
// import { useRouter } from 'next/navigation'
// import { signIn } from "next-auth/react"

// export default function Signup() {
//     const router = useRouter()
//     const form = useForm<loginDataType>({
//         defaultValues : {
//             email : "",
//             password : "",
//         },
//         resolver : zodResolver(loginSchema) 
//     })

//     async function handleSignUp(values : loginDataType){
//         console.log("values" , values);

//         signIn("credentials" ,{...values , redirect : true , callbackUrl : "/"})
//     } 

//     return (
//         <div className='bg-amber-50 p-5 w-10/12 mx-auto mt-10 rounded-lg shadow-sm py-12'>
//             <h1 className='text-2xl font-bold my-4'>Login Page</h1>
//             <form onSubmit={form.handleSubmit(handleSignUp)} className='space-y-4'>
//                 <Controller
//                     name="email"
//                     control={form.control}
//                     render={({field, fieldState}) => (
//                         <Field data-invalid={fieldState.invalid}>
//                             <FieldLabel htmlFor={field.name}>Email</FieldLabel>
//                             <Input  
//                                 {...field}
//                                 id={field.name}
//                                 placeholder="enter your email"
//                                 autoComplete="off"
//                             />
//                             {fieldState.error && (
//                                 <p className="text-red-500 text-sm">{fieldState.error.message}</p>
//                             )}
//                         </Field>
//                     )}
//                 />

//                 <Controller
//                     name="password"
//                     control={form.control}
//                     render={({field, fieldState}) => (
//                         <Field data-invalid={fieldState.invalid}>
//                             <FieldLabel htmlFor={field.name}>Password</FieldLabel>
//                             <Input  
//                                 {...field}
//                                 id={field.name}
//                                 type='password'
//                                 placeholder="enter your password"
//                                 autoComplete="off"
//                             />
//                             {fieldState.error && (
//                                 <p className="text-red-500 text-sm">{fieldState.error.message}</p>
//                             )}
//                         </Field>
//                     )}
//                 />

//                 <Button type="submit" className="w-full my-2 cursor-pointer text-xl">
//                     Sign Up Now 
//                 </Button>
//             </form>
//         </div>
//     )
// }


"use client"
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, loginDataType } from './login.schema'
import { useRouter } from 'next/navigation'
import { loginAction } from './login.action'  // ✅ استخدم loginAction بدل signIn

export default function LoginPage() {
    const router = useRouter()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const form = useForm<loginDataType>({
        defaultValues: { email: "", password: "" },
        resolver: zodResolver(loginSchema)
    })

    async function handleLogin(values: loginDataType) {
        setLoading(true)
        setError("")
        const result = await loginAction(values)
        if (result.success) {
            router.push("/")
            router.refresh()
        } else {
            setError(result.message || "Invalid email or password")
        }
        setLoading(false)
    }

    return (
        <div className='bg-amber-50 p-5 w-10/12 mx-auto mt-10 rounded-lg shadow-sm py-12'>
            <h1 className='text-2xl font-bold my-4'>Login Page</h1>
            {error && <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}
            <form onSubmit={form.handleSubmit(handleLogin)} className='space-y-4'>
                <Controller name="email" control={form.control} render={({ field, fieldState }) => (
                    <Field>
                        <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                        <Input {...field} id={field.name} placeholder="enter your email" autoComplete="off" />
                        {fieldState.error && <p className="text-red-500 text-sm">{fieldState.error.message}</p>}
                    </Field>
                )} />
                <Controller name="password" control={form.control} render={({ field, fieldState }) => (
                    <Field>
                        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                        <Input {...field} id={field.name} type='password' placeholder="enter your password" />
                        {fieldState.error && <p className="text-red-500 text-sm">{fieldState.error.message}</p>}
                    </Field>
                )} />
                <Button type="submit" className="w-full my-2 cursor-pointer text-xl" disabled={loading}>
                    {loading ? "Loading..." : "Login Now"}
                </Button>
            </form>
        </div>
    )
}