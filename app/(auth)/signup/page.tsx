// "use client"
// import React from 'react'
// import { useForm, Controller} from 'react-hook-form'
// import { Button } from '@/components/ui/button'
// import { Field, FieldError, FieldLabel } from '@/components/ui/field'
// import { Input } from '@/components/ui/input';
// import * as z from "zod"
// import { zodResolver } from '@hookform/resolvers/zod'
// import { singnupSchema, singupDataType } from './signup.schema'
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'


// export default function Signup() {
//     const router = useRouter()
//     const form =  useForm({
//         defaultValues : {
//             name : "",
//             email : "",
//             password : "",
//             rePassword : "",
//             phone : "",
//         },resolver : zodResolver(singnupSchema) })

//     async function handleSignUp(values : singupDataType){
//         const res = await fetch("https://ecommerce.routemirs.com/api/v1/auth/signup",{
//                 body: JSON.stringify(values),
//                 method: "POST",
//             headers :{
//                 "Content-Type" : "application/json"
//             }})
//             const finalRes = res.json()
//             console.log("finalRes",finalRes);
            
//         if(res.ok){
//             toast.success("sign up Successfully",{
//                 position : "top-center",
//                 richColors : true,
//             })
//              router.push("/login") 
//         } else { 
//             // ${finalRes.error.massige}
//             toast.error(`error in Sing up`,{
//                 position : "top-center",
//                 richColors : true
//             })
//         }
        

//   return (
//     <>
//     <div className='bg-amber-50 p-3 w-10/12 mx-auto'>
//         <h1 className='text-2xl my-3'>Sing Up Page</h1>
//         <form action="" className='' onSubmit={form.handleSubmit( handleSignUp)}>

//     <Controller
//         name = "name"
//         control = {form.control}
//         render = {({field, fieldState}) => (
//             <Field data-invalid = {fieldState.invalid}>
//                 <FieldLabel htmlFor= {field.name}>Name</FieldLabel>
//                 <Input  
//                 {...field}
//                 id={field.name}
//                 aria-invalid= {fieldState.invalid}
//                 placeholder = "enter your name"
//                 autoComplete="off"/>
//                 {fieldState.invalid && <FieldError errors = {[fieldState.error]} />}
//             </Field>
//         )}
//     />

//      <Controller
//         name = "email"
//         control = {form.control}
//         render = {({field, fieldState}) => (
//             <Field data-invalid = {fieldState.invalid}>
//                 <FieldLabel htmlFor= {field.name}>Email</FieldLabel>
//                 <Input  
//                 {...field}
//                 id={field.name}
//                 aria-invalid= {fieldState.invalid}
//                 placeholder = "enter your email"
//                 autoComplete="off"/>

//                 {fieldState.invalid && <FieldError errors = {[fieldState.error]} />}
//             </Field>

//         )}
//     />

//      <Controller
//         name = "password"
//         control = {form.control}
//         render = {({field, fieldState}) => (
//             <Field data-invalid = {fieldState.invalid}>
//                 <FieldLabel htmlFor= {field.name}>password</FieldLabel>
//                 <Input  
//                 {...field}
//                 id={field.name}
//                 aria-invalid= {fieldState.invalid}
//                 placeholder = "enter your password"
//                 autoComplete="off"
//                 type = 'password'/>

//                 {fieldState.invalid && <FieldError errors = {[fieldState.error]} />}
//             </Field>

//         )}
//     />

//      <Controller
//         name = "rePassword"
//         control = {form.control}
//         render = {({field, fieldState}) => (
//             <Field data-invalid = {fieldState.invalid}>
//                 <FieldLabel htmlFor= {field.name}>rePassword</FieldLabel>
//                 <Input  
//                 {...field}
//                 id={field.name}
//                 aria-invalid= {fieldState.invalid}
//                 placeholder = "enter your rePassword"
//                 autoComplete="off"
//                 type="password"/>

//                 {fieldState.invalid && <FieldError errors = {[fieldState.error]} />}
//             </Field>

//         )}
//     />

// <Controller
//         name = "phone"
//         control = {form.control}
//         render = {({field, fieldState}) => (
//             <Field data-invalid = {fieldState.invalid}>
//                 <FieldLabel htmlFor= {field.name}>phone</FieldLabel>
//                 <Input  
//                 {...field}
//                 id={field.name}
//                 aria-invalid= {fieldState.invalid}
//                 placeholder = "enter your phone"
//                 autoComplete="off"
//                 type="tel"/>
//                 {fieldState.invalid && <FieldError errors = {[fieldState.error]} />}
//             </Field>
//         )}
//     />   
//     <Button className="w-full my-2 cursor-pointer text-xl ">Sign Up Now </Button>
//         </form>
//     </div>
//     </>
//         )}}

"use client"
import React from 'react'
import { useForm, Controller} from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod'
import { singnupSchema, singupDataType } from './signup.schema'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function Signup() {
    const router = useRouter()
    const form = useForm<singupDataType>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: "",
        },
        resolver: zodResolver(singnupSchema)
    })

    async function handleSignUp(values: singupDataType) {
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
            body: JSON.stringify(values),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        const finalRes = await res.json(); 
        console.log("finalRes", finalRes);

        if (res.ok) {
            toast.success("Sign up Successfully", {
                position: "top-center",
                richColors: true,
            })
            router.push("/login")
        } else {
            toast.error(finalRes.message || `Error in Sign up`, {
                position: "top-center",
                richColors: true
            })
        }
    } 

    return (
        <div className='bg-amber-50 p-5 w-10/12 mx-auto mt-10 rounded-lg'>
            <h1 className='text-2xl my-3 font-bold text-center'>Sign Up Page</h1>
            <form onSubmit={form.handleSubmit(handleSignUp)} className='space-y-4'>

                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                            <Input {...field} id={field.name} placeholder="enter your name" autoComplete="off" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                            <Input {...field} id={field.name} placeholder="enter your email" autoComplete="off" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                            <Input {...field} type='password' id={field.name} placeholder="enter your password" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="rePassword"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
                            <Input {...field} type="password" id={field.name} placeholder="re-enter password" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="phone"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                            <Input {...field} type="tel" id={field.name} placeholder="enter your phone" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Button type="submit" className="w-full my-2 cursor-pointer text-xl">Sign Up Now</Button>
            </form>
        </div>
    )
}
