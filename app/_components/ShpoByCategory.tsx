import Link from 'next/link'
import React from 'react'
import { getAllCategories } from '@/services/Categories'

export default async function ShpoByCategory() {
     const Categories = await  getAllCategories()
  return (
    <div className='w-10/12 mx-auto p-5'>

    <div className='flex justify-between my-2 '>
      <h2>Shop By Category</h2>
      <Link href={"/Categories"}> view all</Link>
    </div>

    <div className='grid grid-cols-2 md:grid-cols-6 gap-6 '>
       {Categories.map(item => <div key={item._id} className='border shadow-xl p-5 rounded-2xl flex flex-col items-center gap-3'>
        <img  className='h-20 w-20 rounded-full' src={item.image} alt='item.name'/>
        <h3>{item.name}</h3>
       </div>)}
    </div>

    </div>
  )
}

