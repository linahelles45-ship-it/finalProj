    
"use server"
import { CategoryType } from '@/Types/Product.types'


    export async function categoryaction(): Promise<CategoryType []>    {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart` ,
        
            { 
        headers : {
            "Content-Type" :"application/json"
        },
        cache: "no-store",
        method : "DELET",
         })
        const finalRes = await res.json()
        return finalRes.data
    }
