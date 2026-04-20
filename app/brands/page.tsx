// src/app/brands/page.tsx

import { GetAllBrands } from "@/app/_actions/brand.action"
import { Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export  default async function BrandsPage() {
const brands = await GetAllBrands()
  return (
    <div className="w-10/12 mx-auto py-8">


      <p className="text-sm text-gray-400 mb-5">
        <span className="text-gray-700">{GetAllBrands.bind.name}</span>
      </p>


      <div className="bg-gradient-to from-violet-600 to-violet-800 rounded-2xl p-8 flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl text-white">
          <Star />
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold">Top Brands</h1>
          <p className="text-white/70 text-sm mt-1">Shop from your favourite brands</p>
        </div>
      </div>


      <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-6  sm:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <Link
            key={brand._id}
            href={`/brands/${brand._id}`}
            className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-3 hover:border-gray-300 hover:-translate-y-1 transition-all duration-200 shadow-sm"
          >
  
            <div className="h-10 flex items-center justify-center w-full">
              
  <Image 
    src={brand.image} 
    alt={brand.name} 
    width={80} 
    height={80}
    className="object-contain"
  />
            </div>
            <span className="text-xs text-gray-400">{brand.name}</span>
          </Link>
        ))}
      </div>

    </div>
  )
}
