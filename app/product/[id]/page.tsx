import { Button } from '@/components/ui/button';
import { getProductById } from '@/services/Products.srvices';
import React from 'react'
import { FaStar } from 'react-icons/fa';



export default async function page({params}: { params: Promise<{ id: string }> } ) {
  console.log(params);
  const myParams = await params
  console.log("myPsrams", myParams);
  
  const product = await getProductById(myParams.id)
  return (
    <div className='h-screen bg-gray-100 grid grid-cols-4 items-center gap-4 w-10/12 mx-auto'>
      <div className='col-span-1'>
          <img className='w-full'  src={product?.imageCover || ""} alt={product?.title || ""} />
      </div>

    <div className='col-span-3'>
      <div >
        <span className='text-xs text-white bg-emerald-500 rounded-2xl p-3 mx-3'>{product?.category.name}</span>
        <span className='text-xs text-white bg-emerald-500 rounded-2xl p-3 mx-3'>{product?.brand.name}</span>
      </div>
    <h1 className='text-4xl font-semibold my-3'>{product?.title}</h1>
    <div className='flex gap-2 items-center'><FaStar color='text-yellow-500' /> {product?.ratingAverage}</div>
    <p className='text-gray-700 '>{product?.description}</p>
    
    <div className='flex gap-4 p-2 container my-3 '>
    <Button className='w-1/2 text-2xl py-5 cursor-pointer bg-emerald-500 '>Add To Cart</Button>
    <Button className='w-1/2 text-2xl py-5 cursor-pointer bg-sky-500 '>Add To wihlist</Button>
    </div>
    </div> 
    </div>
)}