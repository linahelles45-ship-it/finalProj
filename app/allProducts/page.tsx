
import { getAllProducts } from '@/app/_actions/product.action'
import { ProductType } from '@/Types/Product.types'
import { LayoutGrid, Star } from 'lucide-react'
import Image from 'next/image'
import AddToCardBtn from '@/app/_components/AddToCardBtn'

export default async function AllProductsPage() {
    const products = await getAllProducts()

    return (
        <div className="w-10/12 mx-auto py-5">

            {/* Hero */}
            <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-8 flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <LayoutGrid />
                </div>
                <div>
                    <h1 className="text-white text-2xl font-semibold">All Products</h1>
                    <p className="text-white/70 text-sm mt-1">Shop from our wide range of products</p>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {products.map((product: ProductType) => (
                    <div key={product.id} className="flex flex-col border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition group">

                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src={product.imageCover}
                                alt={product.title}
                                fill
                                className="object-cover group-hover:scale-105 transition duration-300"
                            />
                            {product.priceAfterDiscount && (
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                    SALE
                                </span>
                            )}
                        </div>

                        <div className="p-2 flex flex-col gap-1 flex-1">
                            <p className="text-xs text-green-600 font-medium">{product.category.name}</p>

                            <p className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-green-600 transition">
                                {product.title}
                            </p>

                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <Star
                                        key={star}
                                        size={10}
                                        className={star <= Math.round(product.ratingAverage)
                                            ? "text-yellow-400 fill-yellow-400"
                                            : "text-gray-300 fill-gray-300"}
                                    />
                                ))}
                                <span className="text-xs text-gray-500">({product.ratingsQuantity})</span>
                            </div>

                            <div className="flex items-center gap-2 mt-auto">
                                <span className="text-sm font-bold text-gray-900">
                                    {product.priceAfterDiscount ?? product.price} EGP
                                </span>
                                {product.priceAfterDiscount && (
                                    <span className="text-xs text-gray-400 line-through">
                                        {product.price} EGP
                                    </span>
                                )}
                            </div>

                            
                            <AddToCardBtn productId={product.id} />

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}