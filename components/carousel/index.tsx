import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
      {/* Tailwing problem with dynamic bg urls */}
       <div 
          className={`bg-[url('/img/slider/1.jpg')] overflow-hidden flex flex-col w-screen h-screen justify-center items-center bg-center bg-no-repeat bg-cover`}>
          <div  className={`flex flex-col w-screen h-screen justify-center items-center`}>
            <p className="font-primary text-primary text-8xl uppercase drop-shadow-md">Welcome</p>
            <p className="font-primary text-primary text-8xl uppercase drop-shadow-md">to my universe</p>
          </div>
        </div> 
       <div 
          className={`bg-[url('/img/slider/2.jpg')] overflow-hidden flex flex-col w-screen h-screen justify-center items-center bg-center bg-no-repeat bg-cover`}>
          <div  className={`flex flex-col w-screen h-screen justify-center items-center`}>
            <p className="font-primary text-primary text-8xl uppercase drop-shadow-md">Design. Creativity.</p>
            <p className="font-primary text-primary text-8xl uppercase drop-shadow-md">Innovation.</p>
          </div>
        </div> 
       <div 
          className={`bg-[url('/img/slider/3.jpg')] overflow-hidden flex flex-col w-screen h-screen justify-center items-center bg-center bg-no-repeat bg-cover`}>
          <div  className={`flex flex-col w-screen h-screen justify-center items-center`}>
            <p className="font-primary text-primary text-8xl uppercase drop-shadow-md">Check out</p>
            <p className="font-primary text-primary text-8xl uppercase drop-shadow-md">all my works</p>
          </div>
        </div> 
    </Slider>
    </>
  );
}

export default Carousel