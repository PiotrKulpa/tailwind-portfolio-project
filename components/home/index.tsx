import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const Home = () => {
  return (
    <div className="absolute t-0 w-screen h-screen">
       <Swiper
       className="absolute t-0 w-screen h-screen"
      spaceBetween={0}
      slidesPerView={1}
      autoplay={true}
      loop
    >
      <SwiperSlide><div className="w-screen h-screen bg-center bg-no-repeat bg-[url('/img/slider/1.jpg')] bg-cover"></div></SwiperSlide>
      <SwiperSlide><div className="w-screen h-screen bg-center bg-no-repeat bg-[url('/img/slider/2.jpg')] bg-cover"></div></SwiperSlide>
      <SwiperSlide><div className="w-screen h-screen bg-center bg-no-repeat bg-[url('/img/slider/3.jpg')] bg-cover"></div></SwiperSlide>
    </Swiper>
    </div>
   
  )
}
