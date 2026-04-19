
"use client"  
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

interface MySliderPropsType {
    listOfImages: string[],
    spaceBetween?: number,
    slideView?: number,
    className?: string
}

export default function MySlider({
    listOfImages,
    spaceBetween = 100,
    slideView = 3,
}: MySliderPropsType) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={spaceBetween}
            slidesPerView={slideView}
            loop
            navigation
            pagination={{
                clickable: true,
                renderBullet: function (index, className) {  
                    return `<span class="${className}"></span>`
                }
            }}
        >
            {listOfImages.map((item) => (
                <SwiperSlide key={item}>
                    <img className='w-full h-120 object-cover' src={item} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}