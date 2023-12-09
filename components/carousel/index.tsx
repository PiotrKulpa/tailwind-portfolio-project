import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { homeCarouselElements } from '@/utils'

const Carousel = () => {
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  };
  return (
    <>
    <div className="absolute z-10 opacity-70 w-screen h-screen bg-[url('/img/pattern.png')] bg-repeat"></div>
    <Slider {...settings}>
      { homeCarouselElements.map((el) => {
        return <div 
                key={el.id}
                className={`overflow-hidden flex flex-col w-screen h-screen justify-center items-center bg-center bg-no-repeat bg-[url('/img/slider/${el.name}')] bg-cover`}>
                <div  className={`flex flex-col w-screen h-screen justify-center items-center`}>
                  <p className="font-primary text-primary text-8xl uppercase drop-shadow-md">{el.text}</p>
                  <p className="font-primary text-primary text-8xl uppercase drop-shadow-md">{el.subText}</p>
                </div>
              </div> 
      })}
    </Slider>
    </>
  );
}

export default Carousel