"use client"
import React, { useContext } from 'react'
import { addProductToCart } from '../_actions/cart.action'
import { toast } from 'sonner'
import { cartContext } from '../_context/CartContextProvider'


export default function AddToCardBtn({productId} : {productId : string}) {
    const {  setnumberOfCartItems , settotalPriseOfCart , setcartProducts} = useContext(cartContext)
    async function handelAddToCart(){
        const res = await addProductToCart(productId)
        if(res.status == "success"){
            toast.success(res.message , { position: "top-center" })
        
        setnumberOfCartItems (res.numberOfCartItems)
        setcartProducts(res.data.products)
        settotalPriseOfCart (res.data.totalCartPrice)
        }
    }
  return (
    <>
        <button onClick={ handelAddToCart } className="bg-emerald-800 w-8 h-8 text-xl text-white rounded-full items-center justify-center">+</button>
    </>
  )
}

