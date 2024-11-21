import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination,  A11y } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';
import { commets } from './static';
import { ContainerWrapper } from '../container-wrapper';
export const Slider = () => {
  return (
    <div className=''>
        <Swiper slidesPerView={3} spaceBetween={80} 
        modules={[ Pagination,  A11y]} 
         
        pagination={true} 
        scrollbar={{draggable: true}}
        breakpoints={{
          768:{
            slidesPerView:2
          },
          1100:{
            slidesPerView:3
          },
          340:{
            slidesPerView:1
          },
        }}

        >
            {
              commets.map((commets,i)=>{
                return (
                  <SwiperSlide key={i}>
                   <div className='bg-green  mt-11 '>
                   <div className='flex gap-[20px] ml-[20px] pt-4'>
                   <img className='xl:w-[113px] w-[90px]' src={commets.img} alt="" />
                 <div className=''>
                 <p className='xl:text-[30px] text-[24px] text-white font-normal leading-[42px] tracking-[0.2px]'>{commets.name}</p>
                 <p className='text-[20px] font-normal text-[#E1B168] leading-[30px] tracking-[0.2px]'>{commets.city}</p>
                 
                 </div>
                 
                   </div>
                   <hr className='xl:w-[420px] w-[300px] ml-[20px] mt-[29px] ' />
                   <p className='text-[18px]  mt-[30px] ml-[20px] xl:w-[454px]'>{commets.commentText}</p>
                   </div>
                  </SwiperSlide>
                )
              })
            }
        </Swiper>
    </div>
  )
}
