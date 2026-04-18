import { ProductType } from '@/Types/Product.types';
import Link from 'next/link';
import React from 'react'
import {CiHeart} from 'react-icons/ci'
import { FaEye, FaStar} from 'react-icons/fa'
import AddToCardBtn from './AddToCardBtn';

interface ProductCardPropsType{
    product: ProductType
}

export default function ProductCard({product}: ProductCardPropsType) {

    return (
    <>
<div  className="p-3 border rounded-xl relative ">
    
    <div className="absolute top-4 right-1">
        <div className="bg-white  curser-pointer border shadow-2xl shadow-black  h-8 w-8 rounded-full flex items-center justify-center"> <CiHeart /> </div>
        <Link href={`/product/${product.id}`} className="bg-white  curser-pointer  mt-3 border shadow-2xl shadow-black  h-8 w-8 rounded-full flex items-center justify-center"> <FaEye /> </Link>
    </div>

        <img src={product.imageCover} alt={product.title} className="w-full" />
            {/* <MySliderx listOfImages={product.id} slideView={3}/> */}

        <p className="text-gray-600 text-xs mt-3">{product.category.name}</p>
        <h3 className="text-lg font-semibold">{product.title.split(" ",2).join(" ")}</h3>
        <div className="flex items-center gap-2">
        <FaStar color="text-yellow-400"/> {product.ratingAverage}
        </div>

        <div className="flex justify-between">
        {product.priceAfterDiscount ? <div> <span className='text-emerald-800 text-xl font-semibold'>{product.priceAfterDiscount} EGP</span> <span className="text-red-500 text-xm line-through">{product.price}</span>  </div> : <h4 className="text-xl text-emerald-800">{product.price} EGP</h4>}
   
       <AddToCardBtn  productId= {product.id}/>  
       </div>
</div>
    </>
  )}

