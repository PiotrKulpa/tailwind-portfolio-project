import React from 'react';
import Link from 'next/link';
import NavButton from './navButton';

import { menuElements } from '@/utils';
import usePageCheck from '@/hooks/usePageCheck';
import { PageType } from '@/global-types';

const DesktopNav = () => {
  const isHomePage = usePageCheck(PageType.Home);

  return (
    <ul
      className={`hidden ${isHomePage ? 'absolute' : 'sticky'} ${
        isHomePage ? 'bg-transparent' : 'bg-primary'
      }  top-0 z-20 w-screen sm:hidden h-30 lg:flex justify-center items-center font-primary text-base uppercase ${
        isHomePage ? 'text-primary' : 'text-secondary'
      }`}
    >
      {menuElements.map((element, index) => {
        return element.isGraphic ? (
          <div
            key={index}
            className={`flex justify-center items-center w-20 h-20 m-10 rounded-full border-2 transition-all ${
              isHomePage
                ? 'border-primary/50 hover:border-primary'
                : 'border-secondary/50 hover:border-secondary'
            } duration-1000 hover:transition-all `}
          >
            <NavButton>
              <Link href={element.href}>
                <span className="p-5">P</span>
              </Link>
            </NavButton>
          </div>
        ) : (
          <NavButton key={index}>
            <Link href={element.href}>
              <span
                className={`block m-4 after:block after:transition-all after:w-0 after:m-auto after:border-b-2 after:border-transparent hover:after:border-b-2 hover:after:w-full ${
                  isHomePage ? 'hover:after:border-primary' : 'hover:after:border-secondary'
                }  hover:after:transition-all`}
              >
                {element.name}
              </span>
            </Link>
          </NavButton>
        );
      })}
    </ul>
  );
};

export default DesktopNav;
