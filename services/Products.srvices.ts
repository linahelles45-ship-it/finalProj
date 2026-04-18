  import { ProductType } from "../Types/Product.types";

  export async function getAllProducts (): Promise<ProductType [] | undefined>{
  try{
    const res =  await fetch ("https://ecommerce.routemisr.com/api/v1/products",{
      cache : "force-cache",
    })
    const finalRes = await res.json()
    console.log(finalRes.data);
        return finalRes.data;
  }catch (error){
    console.log(error);
    
  }
 
  } 

  export async function getProductById(id:string) : Promise < ProductType | null>{
    try {
        const res =  await fetch (`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        const finalRes = await res.json()
        console.log(finalRes.data);
        return finalRes.data;
      
    } catch (error) {
      console.log(error);
      return null;
    }
  }