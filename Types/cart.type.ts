import { ProductType } from "./Product.types"

export interface CartResType {
    CartId : string,
    status  : string,
    message : string,
    numberOfCartItems : number,

    data : {
        totalCartPrice : number,
        products : CartItemType []
    }}
     
export interface CartItemType {
    count : number,
    price : number,
    product : ProductType,
}