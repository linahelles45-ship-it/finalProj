import { CategoryType } from './../Types/Product.types';

 export async  function getAllCategories () : Promise< CategoryType[] > {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
        cache: "force-cache"
    })
    const finalres = await res.json();
    return finalres.data
}