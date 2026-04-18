
// import { Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Image from 'next/image';
// import 'swiper/css';
// import 'swiper/css/pagination';

// interface MySliderPropsType {
//   listOfImages: string[];
//   spaceBetween?: number;
//   slideView?: number;
// }

// export default function MySlider({ listOfImages, spaceBetween = 20, slideView = 3 }: MySliderPropsType) {
//   return (
//     <div className="w-full"> 
//       <Swiper
//         modules={[Pagination]}
//         spaceBetween={spaceBetween}
//         slidesPerView={slideView}
//         loop={true}
//         pagination={{
//           clickable: true,
         
//           renderBullet: function (index, className) {
//             return `<span class="${className}"></span>`;
//           },
//         }}
      
//         className="mySwiper pb-12" 
//       >
//         {listOfImages?.map((image, index) => (
//           <SwiperSlide key={index}>
            
//             <div className="relative w-full h-480px overflow-hidden rounded-xl"> 
//               <Image 
//                 src={image} 
//                 alt={`slider-image-${index}`} 
//                 fill 
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
//                 className="object-cover"
//                 priority={index < 3} 
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { ProductType } from '@/public/src/Types/Product.types';
// import { getProductById } from '@/public/src/services/Products.srvices';



// export default function MySlider({} : ProductType) {
//   const [activeIndex, setActiveIndex] = useState(0);
// const product = await getProductById(myParams.id)
//   return (
//     <div className="w-full flex flex-col gap-3">

// {/*      
//       <div className="relative w-full h-[420px] overflow-hidden rounded-xl bg-gray-100">
//         <Image
//           src={listOfImages[activeIndex]}
//           alt={`main-image-${activeIndex}`}
//           fill
//           sizes="100vw"
//           className="object-contain transition-all duration-300"
//           priority
//         />
//       </div> */}

//       {/* Thumbnails */}
//       <div className="flex gap-2 justify-start">
//         {listOfImages.map((image, index) => (
//           <div
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`relative w-20 h-20 overflow-hidden rounded-lg cursor-pointer flex-shrink-0 transition-all duration-200
//               ${activeIndex === index
//                 ? 'border-2 border-emerald-500'
//                 : 'border border-gray-200 opacity-60 hover:opacity-100'
//               }`}
//           >
//             <Image
//               src={image}
//               alt={`thumb-${index}`}
//               fill
//               sizes="80px"
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }