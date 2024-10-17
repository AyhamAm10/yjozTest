import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CostumBtn from './CostumBtn';
import useScreenSize from '../../hooks/useScreenSizeSlider';
import { Link } from 'react-router-dom';

type sliderProps = {
  data : any[],
  Component : React.ComponentType<{data: any}>
  bg ?: string
  subCategory? : any[]

}

const Slider:React.FC<sliderProps> = ({data , Component , bg , subCategory}) => {

  const screenSize = useScreenSize()
  return (
    <>
      {
        data &&
      <div className={`w-full my-10 bg-[${bg}] `}>
         <div className='flex-center'>
         <button className="px-8 py-4 rounded-[0.5rem] text-red cursor-pointer bg-[#FFC21B1A] text-sm font-medium ">
          {data[0].category.category}
        </button>
         </div>
        <h2 className="text-center text-3xl font-bold my-10 text-dark">Most <span className="text-gradient">Popular</span> {data[0].category.category}</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={screenSize}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((item , id) => (
            <SwiperSlide key={id}>
              <Link to={`product/${item.id}`}>
              <Component data={item} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
  
        {/* Dots Pagination */}
        <div className="flex justify-center mt-5">
          <div className="swiper-pagination"></div>
        </div>
        <div className='flex items-center justify-around'>
          {
            subCategory && 
            subCategory.map((item)=>(
              <div key={item.id}>
                <img className='h-16' src={item.image} alt={item.category} />
              </div>
            ))
          }
        </div>
        <div className='flex-center py-10'>
          <CostumBtn value='Show All' />
        </div>
      </div>
      }
    </>

  );
};

export default Slider;
