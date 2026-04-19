
import React, { createContext, ReactNode, useState } from 'react'
import { CartItemType, CartResType } from '@/Types/cart.type'

interface CartContextType {
    cartId: string;
    setCartId: (id: string) => void;    
    numberOfCartItems: number;
    setnumberOfCartItems: (count: number) => void;
    totalPriceOfCart: number;
    settotalPriseOfCart: (price: number) => void;
    cartProducts: CartItemType[];
    setcartProducts: (products: CartItemType[]) => void;
}

export const cartContext = createContext<CartContextType>({} as CartContextType)

export default function CartContextProvider({ children, userCart }: { children: ReactNode, userCart: CartResType }) {
    const [cartId , setCartId] = useState(userCart?.CartId)
    const [numberOfCartItems, setnumberOfCartItems] = useState(userCart?.numberOfCartItems )
    const [totalPriceOfCart, settotalPriseOfCart] = useState(userCart?.data?.totalCartPrice )
    const [cartProducts, setcartProducts] = useState<CartItemType[]>(userCart?.data?.products )

    return (
        <cartContext.Provider value={{ cartId ,setCartId, numberOfCartItems, setnumberOfCartItems,totalPriceOfCart, settotalPriseOfCart, cartProducts, setcartProducts }}>
            {children}
        </cartContext.Provider>
    )
}