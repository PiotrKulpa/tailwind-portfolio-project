import ScrollToTop from 'react-scroll-to-top';

import { SocialIcon } from 'react-social-icons/component';
import useHomePageCheck from '@/hooks/useHomePageCheck';
import 'react-social-icons/facebook';
import 'react-social-icons/twitter';
import 'react-social-icons/instagram';
import 'react-social-icons/pinterest';
import 'react-social-icons/google';

import ChevronUp from '../icons/chevronUp';
import MapPin from '../icons/mapPin';
import Phone from '../icons/phone';
import Envelope from '../icons/envelope';

const Footer = () => {
  const isHomePage = useHomePageCheck();

  console.log(isHomePage);

  return (
    <div className={`${isHomePage ? 'hidden' : 'relative'} w-full`}>
      <hr className="my-14 h-px bg-gray border-0" />
      <div className="flex justify-center w-screen font-secondary text-xl font-medium">
        <div className="container mx-auto">
          <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center ">
            <div className="flex flex-col items-center w-1/3">
              <div className="m-3 mt-12">
                <MapPin />
              </div>
              <p>Opalowa 3</p>
              <p>Lublin (Polska)</p>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <div className="m-3 mt-12">
                <Phone />
              </div>
              <p>+48 507 531 805</p>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <div className="m-3 mt-12">
                <Envelope />
              </div>
              <p>info.kulpa@gmail.com</p>
            </div>
          </div>
          <div></div>
          <div className="flex flex-col items-center">
            <div className="my-12 z-0">
              <SocialIcon
                url="www.facebook.com"
                style={{ height: 35, width: 35 }}
                className="m-6"
              />
              <SocialIcon url="www.twitter.com" style={{ height: 35, width: 35 }} className="m-6" />
              <SocialIcon
                url="www.instagram.com"
                style={{ height: 35, width: 35 }}
                className="m-6"
              />
              <SocialIcon
                url="www.pinterest.com"
                style={{ height: 35, width: 35 }}
                className="m-6"
              />
              <SocialIcon url="www.google.com" style={{ height: 35, width: 35 }} className="m-6" />
            </div>
            <p className="mt-3">{`Copyright © ${new Date().getFullYear()} Kulpa - All rights reserved.`}</p>
            <ScrollToTop
              className="flex justify-center items-center rounded-full cursor-pointer hover:bg-secondary hover:text-primary"
              style={{ borderRadius: '40px', boxShadow: 'none', right: '25px', bottom: '25px' }}
              smooth
              component={<ChevronUp />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
