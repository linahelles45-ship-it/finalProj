// "use server"

// import { Brand } from '@/Types/Product.types';
// import { getMyToken } from '@/utils/getMyToken';
//        export async function GetAllBrands(): Promise<Brand[]> {
//         const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart` ,{
           
//          method : "GET",}
//          )
//         const finalRes = await res.json()
//         return finalRes
//     }

//            export async function GetspecificBrand(brandId: string): Promise<Brand> {
//         const token = await getMyToken()
//         const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}` ,{
           
//          method : "GET",}
//          )
//         const finalRes = await res.json()
//         return finalRes
//     }


"use server"
import { Brand } from '@/Types/Product.types'

export async function GetAllBrands(): Promise<Brand[]> {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands", {
        cache: "no-store"
    })
    const finalRes = await res.json()
    return finalRes.data
}

export async function GetspecificBrand(brandId: string): Promise<Brand> {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`)
    const finalRes = await res.json()
    return finalRes.data
}
