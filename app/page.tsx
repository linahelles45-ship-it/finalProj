// import React, { lazy, Suspense } from 'react'
// import ProductCard from './_components/ProductCard'
// import { getAllProducts } from '@/services/Products.srvices'
// import MySlider from './_components/MySlider'
// import img1 from"@/asstes/images/slider1.jpg"
// import img2 from"@/asstes/images/slider2.jpg"
// import img3 from"@/asstes/images/slider3.jpg"
// import { InfinitySpin } from 'react-loader-spinner'
// import { getMyToken } from '@/utils/getMyToken'
// const images = [img1.src, img2.src, img3.src ]

// const ShpoByCategoryAsLazyComp = lazy(()=> import('./_components/ShpoByCategory'))


// export default  async function Home() {
// const products = await getAllProducts()
// getMyToken()

//   return (
//     <>
//     <MySlider  className='w-full' listOfImages={images} spaceBetween={0} slideView={1}/>
//     {/* flex items-center justify-center */}
//     <Suspense fallback={<div className='w-full h-40 bg-gray-300 text-2xl text-center '>
//       render {<InfinitySpin 
//       width="200"
//       color='#4fa94d'/>}
//     </div>}>
//       <ShpoByCategoryAsLazyComp />
//     </Suspense>

//       <h2 className="text-2xl w-10/12 mx-auto font-semibold  my-3"> Featured Products</h2>
    
//     <div className="container justify-items-center w-10/12 mx-auto bg-slate-50 p-5 grid gap-5 md:grid-cols-4 xl:grid-cols-5">
//       {products?.map((product) => <ProductCard key={product.id} product={product} />)}
//       </div>
//     </>
//   ) 
// }


import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import ProductCard from './_components/ProductCard'
import { getAllProducts } from '@/services/Products.srvices'
import MySlider from './_components/MySlider'
import img1 from "@/asstes/images/slider1.jpg"
import img2 from "@/asstes/images/slider2.jpg"
import img3 from "@/asstes/images/slider3.jpg"
import { InfinitySpin } from 'react-loader-spinner'

const images = [img1.src, img2.src, img3.src]

const ShpoByCategoryAsLazyComp = dynamic(
  () => import('./_components/ShpoByCategory')
)

export default async function Home() {
  const products = await getAllProducts()

  return (
    <>
      <MySlider
        className='w-full'
        listOfImages={images}
        spaceBetween={0}
        slideView={1}
      />

      <Suspense fallback={
        <div className='w-full h-40 bg-gray-300 text-2xl text-center'>
          <InfinitySpin width="200" color='#4fa94d' />
        </div>
      }>
        <ShpoByCategoryAsLazyComp />
      </Suspense>

      <h2 className="text-2xl w-10/12 mx-auto font-semibold my-3">
        Featured Products
      </h2>

      <div className="container justify-items-center w-10/12 mx-auto bg-slate-50 p-5 grid gap-5 md:grid-cols-4 xl:grid-cols-5">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}