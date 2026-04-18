export interface ProductType {
  id: string,
  title : string,
  imageCover : string,
  description : string,
  price : number,
  sold: number,
  images : string[],
  quantity: number,
  subcategory?: SubCategory[],
  ratingAverage : number,
  ratingsQuantity: number,
  priceAfterDiscount? : number,
  category: CategoryType,
  brand: Brand,
  reviews?: Review[],    
}
export interface CategoryType {
  _id : string,
  name : string,
  slug: string,
  image: string,
}
export interface SubCategory {
  _id: string,
  name: string,
  slug: string,
  category: string,
}
export interface Brand{
  _id:string,
  name:string,
  slug: string,
  image:string,
}
export interface Review {
  _id: string,
  review: string,
  rating: number,
  product: string,
  user: {
    _id: string,
    name: string,
  },
  createdAt: string,
}