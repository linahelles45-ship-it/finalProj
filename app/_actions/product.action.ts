"use server"
import { ProductType } from '@/Types/Product.types'

export async function getAllProducts(): Promise<ProductType[]> {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products", {
        cache: "no-store"
    })
    const finalRes = await res.json()
    return finalRes.data  
}

export async function getSpecificProduct(id: string): Promise<ProductType> {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`, {
        cache: "no-store"
    })
    const finalRes = await res.json()
    return finalRes.data
}