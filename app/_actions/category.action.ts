
"use server"
import { CategoryType } from '@/Types/Product.types'

export async function categoryaction(): Promise<CategoryType[]> {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
        cache: "no-store"
    })
    const finalRes = await res.json()
    return finalRes.data
}
