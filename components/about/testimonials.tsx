import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  var settings = {
    dots: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <div className="text-primary font-secondary text-center bg-testimonials bg-no-repeat h-96 bg-cover">
      <div className="bg-secondary opacity-80 h-full w-full">
        <Slider {...settings}>
          <div>
            <div className="w-full h-96 flex flex-col justify-center items-center">
              <p className="text-4xl lg:text-6xl font-bold">
                Don&apos;t comment bad code - rewrite it
              </p>
              <p className="text-xl">Brian Kernighan</p>
            </div>
          </div>
          <div>
            <div className="w-full h-96 flex flex-col justify-center items-center">
              <p className="text-4xl lg:text-6xl font-bold">
                Any fool can write code that a computer can understand.
                <br /> Good programmers write code that humans can understand
              </p>
              <p className="text-xl">Martin Fowler</p>
            </div>
          </div>
          <div>
            <div className="w-full h-96 flex flex-col justify-center items-center">
              <p className="text-4xl lg:text-6xl font-bold">
                Everybody in this country should learn to program a computer <br />
                because it teaches you how to think
              </p>
              <p className="text-xl">Steve Jobs</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
