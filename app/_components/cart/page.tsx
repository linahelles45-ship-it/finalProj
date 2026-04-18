"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { Trash2 , Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { cartContext } from '@/app/_context/CartContextProvider'
import { CartItemType } from '@/Types/cart.type'
import { deleteItemFromCart, UpdateProductCart } from '@/app/_actions/cart.action'
import { ClearUserCart } from '@/app/_actions/cart.action'

export default function CartPage() {
    const {cartProducts , totalPriceOfCart , numberOfCartItems , setcartProducts , settotalPriseOfCart, setnumberOfCartItems} =  useContext(cartContext)
  
  async  function  handleDeleteItem(id : string) {
    const res = await deleteItemFromCart(id)
    setcartProducts(res.data.products)
    setnumberOfCartItems(res.numberOfCartItems)
    settotalPriseOfCart(res.data.totalCartPrice)
    toast.success(res.message , {position : 'top-center'})
  }

  async  function handlUpdate(id: string , count :number){
    const res = await UpdateProductCart(id , count)
    if(res.status == "success"){
    setcartProducts(res.data.products)
    setnumberOfCartItems(res.numberOfCartItems)
    settotalPriseOfCart(res.data.totalCartPrice)
    toast.success(res.message , {position : 'top-center'})
  } else{
    toast.error("error" , {position : 'top-center'})

  }}

  return (
  <div className='min-h-screen bg-gray-50 py-8 px-4 sm:px-8'>
    <div className='max-w-7xl mx-auto'>
    <h1 className='text-3xl font-bold'>Shppping Cart</h1>
    <div className='lg:grid lg:grid-cols-12 lg:pag-x-12 lg:items-start lg:gap-y-8'>
      {/* cart Item List */}
      <div className='lg:col-span-8'>
      <div className='bg-white shadow sm:rounded-lg overflow-hidden border border-gray-200'>
      <ul role='list' className='divide-y divide-gray-200'>
        {/* product */}

        {cartProducts ?   
          <>  {cartProducts.map((item : CartItemType) => 
          <> <li className='flex py-6 px-4 sm:px-6 hover:bg-gray-50 transition-colors'>
        <div className='h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200'>
          <Image 
          src={item.product.imageCover}
          alt= {item.product.title}
          width={96}
          height={96}
          className = "h-full w-full object-cover object-center"
            />
        </div>

      <div className='ml-4 flex flex-1 flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <h3><span className='cursor-pointer hover:underline'>{item.product.title}</span></h3>
          <p className='ml-4 font-bold text-green-600'>$ {item.price}</p>
          </div>
          <p className='mt-1 text-sm text-gray-500'>{item.product.brand.name}</p>
          <p className='mt-1 text-sm text-gray-500'>{item.product.category.name}</p>
        </div>

      <div className='flex flex-1 items-end justify-between text-sm'>
        <div className='flex items-center space-x-2 border rounded-md p-1 bg-white'>
      <button 
      type='button'
      className='p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100'
      aria-label='Decease quantity'
      onClick={ () => handlUpdate(item.product.id , item.count - 1) }
      > <Minus className='h-4 w-4'/>
      </button>

      <span className='font-medium text-gray-900 w-8 text-center'>{item.count}</span>
        
        <button
        type='button'
        className='p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100'
        aria-label='Increase quantity'
        onClick={ () => handlUpdate(item.product.id , item.count + 1) }
        >
          <Plus  className='h-4 w-4'/>
        </button>
        </div>

      
      <div className='flex'>
        <button
        type='button'
        className='flex items-center text-red-500 hover:text-red-700 font-medium transition-colors'
        onClick={ () => handleDeleteItem (item.product.id)}
        >
        <Trash2 className='h-4 w-4 mr-1'/>
        Remove
        </button>
      </div>
      </div>
      </div>
      </li> </> )} </> :
       <>  <h2 className=' flex justify-center items-center text-red-600 font-bold text-2xl'>No Data In Your Cart</h2></>}


      </ul>
 </div>

 <div className='mt-6 flex items-center justify-between'>
          <button
        type='button'
        className='flex items-center text-red-500 hover:text-red-700 font-medium transition-colors'
        onClick={ClearUserCart}
        >
        <Trash2 className='h-4 w-4 mr-1'/>
        Clear Cart
        </button>

        <button
         type='button'
        className='flex items-center text-blue-700 hover:text-blue-700 font-medium transition-colors'
        >
        <Link href={"/cart"}>Continue Shopping</Link>
        </button>
 </div>

  </div>


{/* Order Summary */}
<div className='lg:col-span-4 mt-8 lg-mt-0'>
  <div className='bg-white shadow sm:rounded-lg overflow-hidden border border-gray-200 p-6'>
  
  <dl className='mt-2 space-y-4'>
   <div className='flex items-center justify-between border-b border-gray-100 pb-4'>
    <dt className='text-sm text-gray-600'>{numberOfCartItems}</dt>
    <dd className='text-sm font-medium text-gray=900'>10</dd>
   </div>

<div className='flex items-center justify-between pt-4'>
  <dt className='text-base font-bold text-gray-900'>Total Price</dt>
  <dt className='text-base font-bold text-indigo-600'> $ {totalPriceOfCart ? totalPriceOfCart : 0} </dt>
</div>
  </dl>

  <div className='mt-6'>
    <Link href={"/payment"} type='button' className='w-full flex items-center rounded-md border border-transparent bg-indigo-600'>
    ChecKout
    </Link>

    <div className='mt-4 text-center'>
      <p className='text-xs text-gray-500'></p>
    </div>
  </div>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}


