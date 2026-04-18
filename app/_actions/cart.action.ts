"use server"
import { CartResType } from '@/Types/cart.type'
import { getMyToken } from '@/utils/getMyToken'


    export  async function  addProductToCart(id : string ) :Promise<CartResType> {
        console.log("Add To Cart");
        const  token = await getMyToken()
        
        const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart" , {
                method : "POST",
                body : JSON.stringify( { productId :  id} ),
            headers : {
                "Content-Type" : "application/json",
                token :  token  as string
            }})
        const finalRes = await res.json()
        console.log("finalRes from add to cart ",finalRes);
        return finalRes
    }

    export async function getUserCart():Promise<CartResType | null>{
        const token = await getMyToken()
    const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart" ,
        {
            headers : {
                token : token as string,
        }})
      
        const finalRes = await res.json()
        if (finalRes.message !== "success") return null
        return finalRes
    }

        export async function deleteItemFromCart( productId : string ): Promise<CartResType> {
        const token = await getMyToken()
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}` ,
        {
            headers : {
                token : token as string,
        }
        , method : "DELETE" })

        const finalRes = await res.json()
        return finalRes
    }

        export async function UpdateProductCart( id : string , count : number): Promise<CartResType> {
        const token = await getMyToken()
        const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}` ,
        
            { 
        headers : {
            "Content-Type" :"application/json"
        }
        , method : "PUT",
        body : JSON.stringify({ count })
         })
        const finalRes = await res.json()
        return finalRes
    }

       export async function ClearUserCart(): Promise<CartResType> {
        const token = await getMyToken()
        const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart` ,
        
            { 
        headers : {
            "Content-Type" :"application/json"
        }
        , method : "DELET",
         })
        const finalRes = await res.json()
        return finalRes
    }
