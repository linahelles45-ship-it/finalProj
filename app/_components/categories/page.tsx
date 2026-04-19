
import { categoryaction } from '@/app/_actions/category.action'
import { CategoryType } from '@/Types/Product.types'
import { LayoutGrid } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

export default async function page() {
    const categories = await categoryaction();

    return (
        <div className="w-10/12 mx-auto py-5">

    <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-8 flex items-center gap-4 mb-8">
    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
    <LayoutGrid />
    </div>
    <div>
    <h1 className="text-white text-2xl font-semibold">All Categories</h1>
    <p className="text-white/70 text-sm mt-1">Shop from your favourite category</p>
    </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    {categories.map((category: CategoryType) => (
    <div
    key={category._id}
    className="flex flex-col items-center gap-2 cursor-pointer group"
    >

    <div className="w-full aspect-square rounded-xl overflow-hidden border border-gray-200 group-hover:border-green-400 transition">
    <Image
    src={category.image}
    alt={category.name}
    width={200}
    height={200}
    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
    />
        </div>

    <p className="text-sm font-medium text-center text-gray-700 group-hover:text-green-500 transition">
        {category.name}
    </p>
    </div>
        ))}
</div>
        </div>
    )}

