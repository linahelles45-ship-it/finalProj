"use server"
import { shippingAddressType } from '@/Types/order.type';
import { getMyToken } from '@/utils/getMyToken';

export async function createCashOrder(cartId : string , shippingAddress : shippingAddressType){
    const token = await getMyToken()
    const res =  await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,{
        headers : {
            token : token as string,
            "Content-Type" : "application/json"
        },
        method : "POST",
        body : JSON.stringify(shippingAddress)

    })
    const finalRes =  await res.json()
    return finalRes
}

export async function createVisaOrder(cartId : string , shippingAddress : shippingAddressType){
    const token = await getMyToken()
    const res =  await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}` ,{
        headers : {
            token : token as string,
            "Content-Type" : "application/json"
        },
        method : "POST",
        body : JSON.stringify(shippingAddress)
    })
    const finalRes =  await res.json()
    return finalRes
}
export async function userorder(id : string ){
    const token = await getMyToken()
    const res =  await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000` ,{
        headers : {
            token : token as string,
            "Content-Type" : "application/json"
        },
        method : "GET",
        body : JSON.stringify(userorder)
    })
    const finalRes =  await res.json()
    return finalRes

}